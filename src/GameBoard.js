import React from 'react';
import './GameBoard.css';
import Square from './Square';


class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curLevel: 2,
      curBoardStatus: this.initBoard(2),
      hasWon: false,
      totalClicks: 0,
      bestLevel: 0,
    }
  }

  initBoard(n){
    const board = new Array(n);
    for(let i = 0; i < n; i++) {
		  board[i] = new Array(n).fill(0); 
	  }
    return board;
  }

  flipCells(r, c){
    const { curBoardStatus, hasWon, totalClicks } = this.state;
    if (!hasWon) {
      let board = curBoardStatus;

      // change the clicked cell
      (board[r][c] === 0) ? board[r][c] = 1 : board[r][c] = 0;

      // change cells around
      if (board[r - 1] !== undefined) {
        (board[r - 1][c] === 0) ? board[r - 1][c] = 1 : board[r - 1][c] = 0;
      }
      if (board[r][c + 1] !== undefined) {
        (board[r][c + 1] === 0) ? board[r][c + 1] = 1 : board[r][c + 1] = 0;
      }
      if (board[r + 1] !== undefined) {
        (board[r + 1][c] === 0) ? board[r + 1][c] = 1 : board[r + 1][c] = 0;
      }
      if (board[r][c - 1] !== undefined) {
        (board[r][c - 1] === 0) ? board[r][c - 1] = 1 : board[r][c - 1] = 0;
      }
      // update clicks
      const Clicks = totalClicks + 1;
      this.setState(() => {return {totalClicks: Clicks, curBoardStatus: board};}, () => this.checkBoard(curBoardStatus));
    }
  }
  
  checkBoard(board){
    const curLevel = board.length;
    for (let r = 0; r < curLevel; r++) {
      if (board[r].includes(0)) { 
        return
      }
    }
    localStorage.setItem('bestLevel', curLevel);
    this.setState({hasWon: true, bestLevel: curLevel}, () => (this.refs.modal.style.display='block'));
  }
  
  renderTable(n) {
    const { curLevel } = this.state;
    const boardStatus = this.state.curBoardStatus;
    let tblBoard = [];
    for (let y = 0; y < curLevel; y++) {
      let row = [];
      for (let x = 0; x < curLevel; x++) {
        row.push(
          <Square
            key={y.toString() + "-" + x.toString()}
            cellValue={boardStatus[y][x]}
            onClickSquare={() => this.flipCells(y,x)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="game-table">
        <tbody>{tblBoard}</tbody>
      </table>
    );
  }

  onReset = () => {
    const newBoard = this.initBoard(this.state.curLevel);
    this.setState({totalClicks: 0, curBoardStatus: newBoard})
  }
  
  onClearRecord = () => {
    localStorage.removeItem('bestLevel');
    this.setState({bestLevel: 0});
  }
  
  onClickClose = () => {
    this.refs.modal.style.display = 'none';
    // setTimeout() is not necessary here, just for record
    setTimeout(() => this.jumpToNext(this.state.curLevel + 1), 100); 
  }

  jumpToNext(n){
    this.initBoard(n);
    this.setState({curLevel: n, curBoardStatus: this.initBoard(n), hasWon: false, totalClicks: 0});
  }

  levelList(n){
    let list = [2];
    const range = this.state.bestLevel + 1
    for (let i = 3; i <= range; i ++) {
      list.push(i);
    }
    return list;
  }
  
  render() {
    localStorage.setItem('bestLevel', [2]);
    const { curLevel, totalClicks, bestLevel } = this.state;
    const levelList = this.levelList(bestLevel);
    return (
      <div className="game-board">
        <div className="user-status">
          
          <div ref="modal" className="modal">
            <div  className="modal-content">
              <div className="container">
                <span onClick={this.onClickClose} className="close-button">&times;</span>
                <h2>You Won!</h2>
              </div>
            </div>
          </div>
          
          <ul key="user-status" className="status">
            <li key="level">Current Level: {curLevel}</li>
            <li key="clicks">Current Clicks: {totalClicks}</li>
            <li key="best-level">Best Level: {localStorage.getItem('bestLevel') || 0}</li>
          </ul>
          <div className="buttons">
            <div className="dropdown">
              <button className="select-level">Choose Level</button>
              <div className="dropdown-content">
                {
                  levelList.map((l) => (<a key={l} onClick={() => this.jumpToNext(l)}>Level {l}</a>))
                }
              </div>
            </div>
            <button className="reset" onClick={this.onReset}>Reset Board</button>
            <button className="clear-record" onClick={this.onClearRecord}>Clear Record</button>
          </div>
        </div>
        {this.renderTable(curLevel)}
      </div>
    );
  }
}

export default GameBoard;