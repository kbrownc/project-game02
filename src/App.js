import React from 'react';
import './App.css';

const NUMBER_OF_BOXES = 112;
const SIZE_OF_GRID = 21;
let board = [];

// boxNumber = which box in grid
// boardNumber = which spot on board
// isSpotVisible = to drive which boxes are seen (generally or derours)
// isSpotDetour =  is spot part of an active detour
// currentSpot = is this post the current location
// boxContent = does this spot have a value in the element

let Board = function(v1, v2, v3, v4, v5, v6) {
  this.boxNumber      = v1;
  this.boardNumber    = v2;
  this.isSpotVisible  = v3;
  this.isSpotDetour   = v4;
  this.currentSpot    = v5;
  this.boxContent     = v6;
}

function loadBoard() {
  for  (let i = 0; i < SIZE_OF_GRID; i++) {
      let boxNumber = i;
      let boardNumber = 1;
      let isSpotVisible = true;
      let isSpotDetour = false;
      let currentSpot = false;
      let boxContent = "";
      board[i] = 
        new Board(boxNumber, boardNumber, isSpotVisible, isSpotDetour, currentSpot, boxContent);
  }
}

loadBoard();
board[0].boxContent = "End";
console.log(board[0]);

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
  }

  onRoll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    this.setState((oldState) => ({
      roll: randomNumber,
      position: Math.min(oldState.position + randomNumber, NUMBER_OF_BOXES - 1)
    }));
  }

  render() {  
    return (
      <div className="App">
        <div className="TopBar">
          <button onClick={this.onReset}>Reset</button>
          <button onClick={this.onRoll}>Roll</button>
          <label>{this.state.roll ?? ''}</label>          
        </div>

        <div className="Board">
          {
            new Array(NUMBER_OF_BOXES).fill(null).map((_, index) => (
              <div key={index} 
                    className={`Box${this.state.position === index ? " Highlight" : ''}`}></div>
            ))
          }
        </div>
      </div>
    );      
  }
}

export default App;
