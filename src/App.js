import React from 'react';
import './App.css';

const SIZE_OF_GRID = 112;
const SIZE_OF_GRID_ROWS = 16;
let board = [];

// board is an array representing a 7 ny 16 grid which contains the game board
// boxNumber = which box in grid
// boardNumber = which spot on board
// isSpotVisible = to drive which boxes are seen (generally or derours)
// isSpotDetour =  is spot part of an active detour
// currentSpot = is this post the current location
// boxContent = does this spot have a value in the element
// specialSquaer = is spot is a special square (miss, gain, detour)

let Board = function(v1, v2, v3, v4, v5, v6, v7) {
  this.boxNumber      = v1;
  this.boardNumber    = v2;
  this.isSpotVisible  = v3;
  this.isSpotDetour   = v4;
  this.currentSpot    = v5;
  this.boxContent     = v6;
  this.specialSquaer  = v7;
}

// loadBoard loads the board wih the initial values
function loadBoard() {
  for  (let i = 0; i < SIZE_OF_GRID; i++) {
      let boxNumber = i;
      let boardNumber;
      let isSpotVisible = false;
      let isSpotDetour = false;
      let currentSpot = false;
      let boxContent = "";
      let specialSquare = "";
      board[i] = 
        new Board(boxNumber, boardNumber, isSpotVisible, isSpotDetour, 
            currentSpot, boxContent, specialSquare);
  }
  for  (let i = 0; i < SIZE_OF_GRID_ROWS; i++) {
      board[i*7].isSpotVisible = true;
      board[i*7].boardNumber = 55 - i;
  }
  for  (let i = 0; i < SIZE_OF_GRID_ROWS; i++) {
      board[i*7+6].isSpotVisible = true;
      board[i*7+6].boardNumber = i+1;
  }
  for  (let i = 105; i < SIZE_OF_GRID; i++) {
      board[i].isSpotVisible = true;
      board[i].boardNumber = i-71;
  }
  board[0].boxContent = "End";
  board[6].boxContent = "Start";
  board[3].isSpotVisible = true;
  board[3].boxContent = "Roll";
  board[10].isSpotVisible = true;
}

loadBoard();

class App extends React.Component {
  state = {
    roll: null,
    position: 0,
  }

  onReset = () => {
    this.setState(({
      roll: null,
      position: 0,
    }))
    loadBoard();
  }

  onRoll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    this.setState((oldState) => ({
      roll: randomNumber,
      position: Math.min(oldState.position + randomNumber, SIZE_OF_GRID - 1)
    }));
  }

  render() {  
    console.log(board[0]);
    console.log(board[1]);
    return (
      <div className="App">
        <div className="TopBar">
          <button onClick={this.onReset}>Play</button>
          <button onClick={this.onRoll}>Roll</button>
          <label>{this.state.roll ?? ''}</label>          
        </div>

        <div className="Board">
          {
              board.map((item, index) => (
              <div key={index} 
                    className={`Box${item.isSpotVisible ? " spotVisible" : ''}`}></div>
            ))
          }
        </div>
      </div>
    );      
  }
}

export default App;
