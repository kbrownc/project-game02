import React from 'react';
import './App.css';

const SIZE_OF_GRID = 112;
const SIZE_OF_GRID_ROWS = 16;
const SIZE_OF_NAV = 7;
let message = "Roll again";
let optMessage = "Kim";
let board = [];
let nav = [];
let score = 0;

// board is an array representing a 7 ny 16 grid which contains the game board
// boxNumber = which box in grid
// boardNumber = which spot on board
// isSpotVisible = to drive which boxes are seen (generally or derours)
// isSpotDetour =  is spot part of an active detour
// currentSpot = is this post the current location
// boxContent = does this spot have a value in the element
// specialSquaer = is spot is a special square (miss, gain, detour)

// nav is an array representing a 7 ny 1 grid which contains the game top nav bar row
// boxNumber = which box in grid
// isSpotVisible = to drive which boxes are seen (generally or derours)
// boxContent = does this spot have a value in the element

let Board = function(v1, v2, v3, v4, v5, v6, v7) {
  this.boxNumber      = v1;
  this.boardNumber    = v2;
  this.isSpotVisible  = v3;
  this.isSpotDetour   = v4;
  this.currentSpot    = v5;
  this.boxContent     = v6;
  this.specialSquaer  = v7;
}

let Nav = function(v1, v2, v3) {
  this.boxNumberNav     = v1;
  this.isSpotVisibleNav = v2;
  this.boxContentNav    = v3;
}

// createBoard loads the board wih the initial values
function createBoard() {
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
  }
  for  (let i = 0; i < SIZE_OF_GRID_ROWS; i++) {
      board[i*7+6].isSpotVisible = true;
      board[i*7+6].boardNumber = i+1;
  }
  for  (let i = 105; i < SIZE_OF_GRID; i++) {
      board[i].isSpotVisible = true;
  }
  for  (let i = 0; i < 8; i++) {
      board[i*7+6].boardNumber = i+1;
  }
 // detour 1 
  board[54].isSpotDetour = true;
  board[53].isSpotDetour = true;
  board[52].isSpotDetour = true;
  board[59].isSpotDetour = true;
  board[66].isSpotDetour = true;
  board[67].isSpotDetour = true;
  board[68].isSpotDetour = true;
// detour 2
  board[102].isSpotDetour = true;
  board[95].isSpotDetour = true;
  board[88].isSpotDetour = true;
  board[87].isSpotDetour = true;
  board[86].isSpotDetour = true;
  board[93].isSpotDetour = true;
  board[100].isSpotDetour = true;
// detour 3
  board[36].isSpotDetour = true;
  board[37].isSpotDetour = true;
  board[38].isSpotDetour = true;
  board[31].isSpotDetour = true;
  board[24].isSpotDetour = true;
  board[23].isSpotDetour = true;
  board[22].isSpotDetour = true;
// top of board
  board[0].boxContent = "End";
  board[6].boxContent = "Start";
  board[3].isSpotVisible = true;
  board[3].boxContent = "Roll";
  board[10].isSpotVisible = true;
//  board[10].boxContent = `${this.state.roll}`;
  board[10].boxContent = 5;
// special squares - miss a turn
  board[34].specialSquare = 'miss';
  board[97].specialSquare = 'miss';
  board[108].specialSquare = 'miss';
  board[77].specialSquare = 'miss';
  board[28].specialSquare = 'miss';
  board[102].specialSquare = 'miss';
  board[36].specialSquare = 'miss';
// special squares - gain a turn
  board[111].specialSquare = 'gain';
  board[105].specialSquare = 'gain';
// special squares - detour
  board[55].specialSquare = 'detour';
  board[108].specialSquare = 'detour';
  board[35].specialSquare = 'detour';
  return board;
}

// createrNav loads the nav bar wih the initial values
function createNav() {
  for  (let i = 0; i < SIZE_OF_NAV; i++) {
      let boxNumberNav     = i;
      let isSpotVisibleNav = false;
      let boxContentNav    = "";
      nav[i] = new Nav(boxNumberNav, isSpotVisibleNav, boxContentNav);
  }
  nav[0].boxContentNav    = "Play";
  nav[0].isSpotVisibleNav = true;
  nav[5].isSpotVisibleNav = true;
  nav[5].boxContentNav    = "Score";
  nav[6].isSpotVisibleNav = true;
  nav[6].boxContentNav = `${score}`;
  return nav;
}

class App extends React.Component {
  state = {
    roll: 0,
    position: 0,
    board: createBoard(),
    nav: createNav()
  };

  onReset = () => {
    this.setState(({
      roll: 0,
      position: 0,
      board: createBoard(),
      nav: createNav()
    }))
  }

  onRoll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log('randomNumber', randomNumber);
    this.setState((oldState) => ({
      roll: randomNumber,
      position: Math.min(oldState.position + randomNumber, SIZE_OF_GRID - 1),
      board: createBoard(),
      nav: createNav()
    }));
    console.log('randomNumber', this.state.roll);
  }

 render() { 
    return (
      <div className="App">
        <div className="Nav">      
          {
            this.state.nav.map((item, index) => (
              <div key={index}
              className={`Box${item.isSpotVisibleNav ? " spotVisible"    : ''}`}
              onClick={item.boxContentNav === 
                    "Play" ? this.onReset : undefined}  >
              {item.boxContentNav}</div>
            ))
          }
           <div className="Messages">        
              <h4 className="message">{message}</h4>
              <h5 className="optMessage">{optMessage}</h5>
          </div>
        </div>

        <div className="Board">
          {
              this.state.board.map((item, index) => (
                <div key={index}
               className={`Box${item.isSpotVisible ? " spotVisible"    : ''}
                  ${item.isCurrentSpot ? " markSpot"    : ''}`} onClick={item.boxContent === 
                    "Roll" ? this.onRoll : undefined}  
                >{item.boxContent}
                </div>
            ))
          }
        </div>
      </div>
    );      
  }
}

export default App;
