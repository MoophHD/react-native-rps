import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Choose from './app/Choose';
import Figure from './app/Figure';
import Result from './app/Result';

const FIGURES = {
  paper: 'paper',
  rock: 'rock',
  scissors: 'scissors'
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      figure: null,
      enemyFigure: '',
      result: null
    }

    this.handleChoice = this.handleChoice.bind(this);
    this.restart = this.restart.bind(this);
  }

  handleChoice(figure) {
    this.setState(() => ({figure: figure}));

    this.rollEnemy()
  }

  rollEnemy() {
    let roll = Math.random();
    let result;

    if (roll >= 0.66 && roll < 1) {
      result = FIGURES.paper;
    } else if (roll >= 0.33 && roll < 0.66) {
      result = FIGURES.rock;
    } else {
      result = FIGURES.scissors;
    }

    this.setState(() => ({enemyFigure: result}), this.resolve)
  }

  resolve() {
    const {paper, rock, scissors } = FIGURES;
    let result = 'tie';
    let player = this.state.figure;
    let enemy = this.state.enemyFigure;

    if (player == enemy) {this.setVerdict(result)};
    switch(player) {
      case(paper): {
        result = enemy == scissors ? 'lose' : 'win';
        break;
      }
      case(rock): {
        result = enemy == paper ? 'lose' : 'win';
        break;
      }
      case(scissors): {
        result = enemy == rock ? 'lose' : 'win';
        break;
      }
      default : break;
    }

    this.setVerdict(result); 
  }

  setVerdict(val) {
    setTimeout(() => this.setState(() => ({result: val})), 1500); 
  }

  restart() {
    this.setState(() => ({
      figure: null,
      enemyFigure: null,
      result: null}
    ));
  }

  
  render() {
    console.log(this.state.result);
    return (
      <View style={styles.container}>
        {this.state.result && <Result onRestart={this.restart} verdict={this.state.result}/>}
        {!this.state.result && <Figure figureType={this.state.enemyFigure}/>}
        {!this.state.result && <Choose onChoice={this.handleChoice}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
});
