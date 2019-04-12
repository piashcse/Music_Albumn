import {Dimensions, StyleSheet} from "react-native";
import {COLOR} from "../../utils/Colors";

const {height, width} = Dimensions.get('window');
export default styles = StyleSheet.create({
    containerMain:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerFlatlist:{
        width: width - 50
    },
    searchContainer: {
        position: 'absolute',
        top: 65,
        width: width - 50,
        backgroundColor: COLOR.whiteColor,
        borderRadius: 8
    },
    suggestionContainer: {
        borderBottomWidth: 0.5,
        borderColor: COLOR.suggestionContainerColor,
        padding: 10
    },
    suggestionTextStyle: {
        width: width - 60
    },
    containerSearchInput: {
        marginVertical: 15,
    },
    searchInput: {
        width: width - 50,
        padding: 6,
        borderColor: COLOR.inputTextBorderColor,
        borderWidth: 1,
        backgroundColor: COLOR.inputTextBackgroundColor
    }
});