import React from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';
import s from './styles'

const Result = ({verdict, onRestart}) => (
    <View style={verdict == 'lose' ? s.container : StyleSheet.flatten([s.container, s.containerWin]) }>
        <Text style={verdict ? s.textWin : s.text}>
            {verdict.toUpperCase()}
        </Text>
        <Button title="restart?" onPress={() => { onRestart() }}></Button>
    </View>
)

export default Result;

