import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    container: {
        zIndex: 1000,
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'crimson'
    },
    containerWin: {
        backgroundColor: 'skyblue'
    },
    text: {
        color: '#fff'
    },
    textWin: {
        color: '#333'
    }
}

export default StyleSheet.create(styles);