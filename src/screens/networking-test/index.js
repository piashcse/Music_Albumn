import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getTestData} from '../../redux/actions/network-demo';

class NetworkTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }

    }

    componentDidMount() {
        this.props.getTestData();
    }

    render() {
        let message = this.props.networkTestReducer.isFetching ? "Data Fetching..." : "Success Total User: "
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{message}</Text>
                <View>
                    {this.props.networkTestReducer.data.map((item) => {
                        return (
                            <Text>
                                {item.title}
                            </Text>
                        )
                    })}
                </View>
            </View>
        )
    }

}


function mapStateToProps(state) {
    return {
        networkTestReducer: state.networkTestReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTestData: () => dispatch(getTestData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NetworkTest);