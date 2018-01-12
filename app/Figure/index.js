import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import s from './styles'

const Figure = ({figureType, onClick}) => {
    return (
        onClick ?
        <Button 
            style={StyleSheet.flatten([s.core, s.btn])}
            onPress={() => { onClick(figureType) }}
            title={figureType}>
        </Button>
        :
        <View style={StyleSheet.flatten([s.core, s.view])}>
            <Text style={s.text}>{figureType}</Text>
        </View>
    )
}
// style={Object.assign({}, s.container, s.text)} 



// const Figure = ({type, onClick}) => (
//     onClick ?
//     <Button 
//         onPress={() => onClick(type.type)} 
//         style={Object.assign({}, s.container, s.text)} 
//         title={type.type}>
//     </Button>
//     :
//     <View style={s.container}>
//         <Text style={s.text}>{type.type}</Text>
//     </View>
// )

export default Figure;