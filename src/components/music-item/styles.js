import {Dimensions, StyleSheet} from "react-native";
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        margin: 18
    },
    containerTop: {
        flexDirection: 'row',
        marginBottom: 8
    },
    containerTitle: {
        paddingLeft: 20
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    thumbnailImageStyle: {
        height: 60,
        width: 100
    },
    coverImageStyle: {
        height: 200,
        width: width - 60
    }
});