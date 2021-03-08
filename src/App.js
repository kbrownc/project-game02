import React from 'react';
import './App.css';

const SIZE_OF_GRID = 112;
const SIZE_OF_GRID_ROWS = 16;
const SIZE_OF_NAV = 7;
let message = "Roll again";
let optMessage = "Kim";
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

// let Board = function(v1, v2, v3, v4, v5, v6, v7) {
//   this.boxNumber      = v1;
//   this.boardNumber    = v2;
//   this.isSpotVisible  = v3;
//   this.isSpotDetour   = v4;
//   this.currentSpot    = v5;
//   this.boxContent     = v6;
//   this.specialSquaer  = v7;
// }

// let Nav = function(v1, v2, v3) {
//   this.boxNumberNav     = v1;
//   this.isSpotVisibleNav = v2;
//   this.boxContentNav    = v3;
// }

// // createBoard loads the board wih the initial values
// function createBoard() {
//   for  (let i = 0; i < SIZE_OF_GRID; i++) {
//       let boxNumber = i;
//       let boardNumber;
//       let isSpotVisible = false;
//       let isSpotDetour = false;
//       let currentSpot = false;
//       let boxContent = "";
//       let specialSquare = "";
//       board[i] = 
//         new Board(boxNumber, boardNumber, isSpotVisible, isSpotDetour, 
//             currentSpot, boxContent, specialSquare);
//   }
//   for  (let i = 0; i < SIZE_OF_GRID_ROWS; i++) {
//       board[i*7].isSpotVisible = true;
//   }
//   for  (let i = 0; i < SIZE_OF_GRID_ROWS; i++) {
//       board[i*7+6].isSpotVisible = true;
//       board[i*7+6].boardNumber = i+1;
//   }
//   for  (let i = 105; i < SIZE_OF_GRID; i++) {
//       board[i].isSpotVisible = true;
//   }
//   for  (let i = 0; i < 8; i++) {
//       board[i*7+6].boardNumber = i+1;
//   }
//  // detour 1 
//   board[54].isSpotDetour = true;
//   board[53].isSpotDetour = true;
//   board[52].isSpotDetour = true;
//   board[59].isSpotDetour = true;
//   board[66].isSpotDetour = true;
//   board[67].isSpotDetour = true;
//   board[68].isSpotDetour = true;
// // detour 2
//   board[102].isSpotDetour = true;
//   board[95].isSpotDetour = true;
//   board[88].isSpotDetour = true;
//   board[87].isSpotDetour = true;
//   board[86].isSpotDetour = true;
//   board[93].isSpotDetour = true;
//   board[100].isSpotDetour = true;
// // detour 3
//   board[36].isSpotDetour = true;
//   board[37].isSpotDetour = true;
//   board[38].isSpotDetour = true;
//   board[31].isSpotDetour = true;
//   board[24].isSpotDetour = true;
//   board[23].isSpotDetour = true;
//   board[22].isSpotDetour = true;
// // top of board
//   board[0].boxContent = "End";
//   board[6].boxContent = "Start";
//   board[3].isSpotVisible = true;
//   board[3].boxContent = "Roll";
//   board[10].isSpotVisible = true;
//   board[10].boxContent = `${this.state.roll}`;
//   board[10].boxContent = 5;
// // special squares - miss a turn
//   board[34].specialSquare = 'miss';
//   board[97].specialSquare = 'miss';
//   board[108].specialSquare = 'miss';
//   board[77].specialSquare = 'miss';
//   board[28].specialSquare = 'miss';
//   board[102].specialSquare = 'miss';
//   board[36].specialSquare = 'miss';
// // special squares - gain a turn
//   board[111].specialSquare = 'gain';
//   board[105].specialSquare = 'gain';
// // special squares - detour
//   board[55].specialSquare = 'detour';
//   board[108].specialSquare = 'detour';
//   board[35].specialSquare = 'detour';
//   return board;
// }

// // createrNav loads the nav bar wih the initial values
// function createNav() {
//   for  (let i = 0; i < SIZE_OF_NAV; i++) {
//       let boxNumberNav     = i;
//       let isSpotVisibleNav = false;
//       let boxContentNav    = "";
//       nav[i] = new Nav(boxNumberNav, isSpotVisibleNav, boxContentNav);
//   }
//   nav[0].boxContentNav    = "Play";
//   nav[0].isSpotVisibleNav = true;
//   nav[5].isSpotVisibleNav = true;
//   nav[5].boxContentNav    = "Score";
//   nav[6].isSpotVisibleNav = true;
//   nav[6].boxContentNav = `${score}`;
//   return nav;
// }

let nav = [{boxContentNav: "Play", boxCol: 1, boxRow: 1},
          {boxContentNav: "Score", boxCol: 6, boxRow: 1},
          {boxContentNav: 0, boxCol: 7, boxRow: 1}
];

let board = [{boxContent: "Start", boxCol: 7, boxRow: 1},
            {boxCol: 7, boxRow: 2},
            {boxCol: 7, boxRow: 3},
            {boxCol: 7, boxRow: 4},
            {boxCol: 7, boxRow: 5, extraScore: 1},
            {boxCol: 7, boxRow: 6},
            {boxCol: 7, boxRow: 7},
            {boxCol: 7, boxRow: 8, itemsToDelete: 1, 
                                    itemsToAdd: [{boxCol: 6, boxRow: 8},
                                                  {boxCol: 5, boxRow: 8},
                                                  {boxCol: 4, boxRow: 8},
                                                  {boxCol: 4, boxRow: 9},
                                                  {boxCol: 4, boxRow: 10},
                                                  {boxCol: 5, boxRow: 10},
                                                  {boxCol: 6, boxRow: 10},]},
            {boxCol: 7, boxRow: 9},
            {boxCol: 7, boxRow: 10},
            {boxCol: 7, boxRow: 11},
            {boxCol: 7, boxRow: 12},
            {boxCol: 7, boxRow: 13},
            {boxCol: 7, boxRow: 14, extraScore: 1},
            {boxCol: 7, boxRow: 15},
            {boxCol: 7, boxRow: 16, extraScore: -1},
            {boxCol: 6, boxRow: 16},
            {boxCol: 5, boxRow: 16, itemsToDelete: 1, 
                                    itemsToAdd: [{boxCol: 5, boxRow: 15, extraScore: -1},
                                                  {boxCol: 5, boxRow: 14},
                                                  {boxCol: 5, boxRow: 13},
                                                  {boxCol: 4, boxRow: 13},
                                                  {boxCol: 3, boxRow: 13},
                                                  {boxCol: 3, boxRow: 14},
                                                  {boxCol: 3, boxRow: 15},]},
            {boxCol: 4, boxRow: 16, extraScore: 1},
            {boxCol: 3, boxRow: 16},
            {boxCol: 2, boxRow: 16},
            {boxCol: 1, boxRow: 16, extraScore: -1},
            {boxCol: 1, boxRow: 15},
            {boxCol: 1, boxRow: 14},
            {boxCol: 1, boxRow: 13},
            {boxCol: 1, boxRow: 12, extraScore: 1},
            {boxCol: 1, boxRow: 11},
            {boxCol: 1, boxRow: 10},
            {boxCol: 1, boxRow: 9},
            {boxCol: 1, boxRow: 8},
            {boxCol: 1, boxRow: 7},
            {boxCol: 1, boxRow: 6, itemsToDelete: 1, 
                                    itemsToAdd: [{boxCol: 2, boxRow: 6, extraScore: -1},
                                                  {boxCol: 3, boxRow: 6},
                                                  {boxCol: 4, boxRow: 6},
                                                  {boxCol: 4, boxRow: 5},
                                                  {boxCol: 4, boxRow: 4},
                                                  {boxCol: 3, boxRow: 4},
                                                  {boxCol: 2, boxRow: 4},]},
            {boxCol: 1, boxRow: 5, extraScore: 1},
            {boxCol: 1, boxRow: 4},
            {boxCol: 1, boxRow: 3},
            {boxCol: 1, boxRow: 2},
            {boxContent: "End", boxCol: 1, boxRow: 1},
            {boxContent: "Roll", boxCol: 4, boxRow: 1},
            {boxContent: 0, boxCol: 4, boxRow: 2}
];


class App extends React.Component {
  state = {
    roll: 0,
    score: 0,
    position: 0,
    board: board.slice(),
    nav: nav.slice()
  };

  onReset = () => {
    this.setState(({
      roll: 0,
      score: 0,
      position: 0,
      board: board.slice(),
      nav: nav.slice()
    }))
  }

  onRoll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // Need to adjust score of miss a turn or gain a turn was landed on
    if (board[this.state.position + randomNumber].extraScore != undefined){
        score = score + board[this.state.position + randomNumber].extraScore;
        if (board[this.state.position + randomNumber].extraScore < 0){
            optMessage = "Gain a Turn";
          }
          else {
            optMessage = "Lose a Turn";
          }
      };
    // Need to remove the square after the start of the detour
    if (board[this.state.position + randomNumber].itemsToDelete != undefined){
        const delBoard = board.slice(this.state.position  + randomNumber + 1, 
            board[this.state.position].itemsToDelete);
    }
    // Need to add the detour squares
    if (board[this.state.position + randomNumber].itemsToAdd != undefined){
        const insertBoard = board.slice(this.state.position + randomNumber, 0 , 
            board[this.state.position].itemsToAdd[0],
            board[this.state.position].itemsToAdd[1],
            board[this.state.position].itemsToAdd[2],
            board[this.state.position].itemsToAdd[3],
            board[this.state.position].itemsToAdd[4],
            board[this.state.position].itemsToAdd[5],
            board[this.state.position].itemsToAdd[6]);
    }
    if (this.state.position >= (board.length - 2)) {
      message = "You won";
    }
    this.setState((oldState) => ({
      roll: randomNumber,
      score: score + 1,
      position: Math.min(oldState.position + randomNumber, board.length - 2),
      board: board.slice(),
      nav: nav.slice()
    }));
  }

 render() { 
    return (
      <div className="App">
        <div className="Nav">      
          {
            this.state.nav.map((item, index) => (
              <div key={index}
              className="Box"
              style={{gridColumn: `${item.boxCol}`, gridRow: `${item.boxRow}`}}
              onClick={item.boxContentNav === 
                    "Play" ? this.onReset : undefined}>
              {item.boxContentNav}</div>
            ))
          }
          </div>
           <div className="Messages">       
              <h4 className="message">{message}</h4>
              <h5 className="optMessage">{optMessage}</h5>
          </div>
        

        <div className="Board">
          {
              this.state.board.map((item, index) => (
                <div key={index}
               className={`Box${this.state.position === index ? " Highlight" : ''}`}
               onClick={item.boxContent === "Roll" ? this.onRoll : undefined}
                style={{gridColumn: `${item.boxCol}`, gridRow: `${item.boxRow}`}}  
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
