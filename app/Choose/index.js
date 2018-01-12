import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Figure from '../Figure';
import s from './styles'

export default class Choose extends React.Component {
  render() {
    const { onChoice } = this.props;
    return (
      <View style={s.container}>
        <Figure onClick={onChoice} figureType={'scissors'} />
        <Figure onClick={onChoice} figureType={'rock'}/>
        <Figure onClick={onChoice} figureType={'paper'} />
      </View>
    );
  }
}
