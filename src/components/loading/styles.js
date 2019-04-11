import {Dimensions, StyleSheet} from "react-native";
import {COLOR} from "../../utils/Colors"
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
    containerLoading: {
        width,
        height,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        left: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.transparentColor,
        height: 100,
        width: width / 1.2,
        borderRadius: 2
    },
    loadingTextStyle: {
        fontSize: 25,
        color: COLOR.primaryColor,
        marginLeft: 20
    }
});