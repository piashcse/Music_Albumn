import React, {Component} from 'react';
import {View, ActivityIndicator, Text, Dimensions} from 'react-native';
import styles from "./styles"
import {COLOR} from "../../utils/Colors";
const {width, height} = Dimensions.get('window');


export default ()=>{
    return (
        <View style={styles.containerLoading}>
            <View style={styles.containerIndicator}>
                <ActivityIndicator size={"large"} color={COLOR.primaryColor}/>
                <Text style={styles.loadingTextStyle}>Loading</Text>
            </View>
        </View>
    )
}