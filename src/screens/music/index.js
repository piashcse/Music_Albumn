import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getMusicData} from '../../redux/actions/music';
import Loading from "../../components/loading/Loading";
import MusicItem from "../../components/music-item/MusicItem";
import SearchInput, {createFilter} from 'react-native-search-filter';
import styles from './styles'

const KEYS_TO_FILTERS = ['title'];

class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
    }

    componentDidMount() {
        this.props.getMusicData();
    }

    render() {
        let {searchTerm} = this.state;
        const filteredEmails = this.props.musicReducer.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <SearchInput
                    onChangeText={(term) => {
                        this.searchUpdated(term)
                    }}
                    style={styles.searchInput}
                    placeholder={'Search'}/>
                <FlatList
                    data={this.props.musicReducer.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => this.flatListItem(item)}/>

                    {searchTerm.trim().length > 0 &&
                    <ScrollView style={styles.searchContainer}>
                        {filteredEmails.map(email => {
                            return (
                                <TouchableOpacity onPress={() => alert(email.title)} key={email.id}
                                                  style={styles.emailItem}>
                                    <View>
                                        <Text>{email.title}</Text>
                                        <Text style={styles.emailSubject}>{email.subject}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>}
                {this.props.musicReducer.isFetching && <Loading/>}
            </View>
        )
    }

    flatListItem(item) {
        return (
            <View>
                <MusicItem
                    title={item.title}
                    artist={item.artist}
                    thumbnailUrl={item.thumbnail_image}
                    coverImageUrl={item.image}
                />
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        musicReducer: state.musicReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMusicData: () => dispatch(getMusicData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Music);
