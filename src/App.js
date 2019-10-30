import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';

// state of App is for remembering the user data
// only the curLevel need to be passed to child component for rendering Gameboard
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  initBoard(n){
    const board = new Array(n);
    for(let i = 0; i < n; i++) {
		  board[i] = new Array(n).fill(0); 
	  }
    return board;
  }
  
  handleChange(event) {
    this.setState({curLevel: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {curLevel} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.glitch.com/3866f727-23a4-4f8b-b6fe-8d1dff83bb64%2Fpuzzle.ico?1572289116808" className="puzzle-logo" alt="Puzzle Logo"/>
          <h2>Welcome to Flip Game</h2>
          <h4>built with React</h4>
        </div>
        <div className="game-board">
          <div className="instruction">
            <p>Click the square to change its color, and all the adjacent squares will also be changed.</p>
            <p>The goal is to make the entire board blue.</p>
          </div>
          <div className="game">
            <GameBoard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
