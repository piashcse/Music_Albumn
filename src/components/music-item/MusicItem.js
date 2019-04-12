import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from "./styles"

export default ({title, artist, coverImageUrl, thumbnailUrl, ...props}) => {
    return (
        <View style={styles.containerMain}>
            <View style={styles.containerTop}>
                <Image
                    style={styles.thumbnailImageStyle}
                    source={{uri: thumbnailUrl}}
                    resizeMode={"cover"}
                />
                <View style={styles.containerTitle}>
                    <Text style={styles.titleStyle}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>
                </View>
            </View>
            <View>
                <Image
                    style={styles.coverImageStyle}
                    source={{uri: coverImageUrl}}
                    resizeMode={"stretch"}
                />
            </View>

        </View>
    )
}


