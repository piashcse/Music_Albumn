import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import styles from "./styles"
import {COLOR} from "../../utils/Colors";

export default () => {
    return (
        <View style={styles.containerLoading}>
            <View style={styles.containerIndicator}>
                <ActivityIndicator size={"large"} color={COLOR.primaryColor}/>
                <Text style={styles.loadingTextStyle}>Loading</Text>
            </View>
        </View>
    )
}