import React from 'react';
import './App.css';

let message = "Roll again";
let optMessage = "Kim";
let score = 0;
let newBoard = 
            [{boxContent: "Start", boxCol: 7, boxRow: 1},
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
            {boxContent: "End", boxCol: 1, boxRow: 1}
];

class App extends React.Component {
  state = {
    roll: 0,
    score: 0,
    position: -1,
    board: newBoard.slice()
  };

  onReset = () => {
   message = "Roll again";
   optMessage = "Kim";
   score = 0;
    this.setState(({
      roll: null,
      score: 0,
      position: -1,
      board: newBoard.slice()
    }))
  }

  onRoll = () => {
 //   const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber = 1;
    let scoreAdj = 1;
    optMessage = "Kim";
    // Need to adjust score if 'miss a turn' or 'gain a turn' was landed on
    if (this.state.board[this.state.position + randomNumber].extraScore != undefined){
        scoreAdj = scoreAdj + this.state.board[this.state.position + randomNumber].extraScore;
        if (this.state.board[this.state.position + randomNumber].extraScore < 0){
            optMessage = "Wonderful....you get an extra roll";
          }
          else {
            optMessage = "Sorry....you lose a roll";
          }
      };
    // Need to remove the square after the start of the detour
    // Need to add the detour squares and remove a single square
    if (this.state.board[this.state.position + randomNumber].itemsToAdd != undefined){  
        this.state.board.splice(this.state.position + randomNumber + 1, 1 ,  
            this.state.board[this.state.position + randomNumber].itemsToAdd[0],
            this.state.board[this.state.position + randomNumber].itemsToAdd[1],
            this.state.board[this.state.position + randomNumber].itemsToAdd[2],
            this.state.board[this.state.position + randomNumber].itemsToAdd[3],
            this.state.board[this.state.position + randomNumber].itemsToAdd[4],
            this.state.board[this.state.position + randomNumber].itemsToAdd[5],
            this.state.board[this.state.position + randomNumber].itemsToAdd[6]);
        optMessage = "You have a longer journey";
    }
    if ((this.state.position + 1) >= (this.state.board.length - 1)) {
      message = "Game Complete";
      optMessage = "Kim";
    }
    else {
        message = "Role Again";
    }
    score = score + scoreAdj;
    this.setState((oldState) => ({
      roll: randomNumber,
      score: score,
      position: Math.min(oldState.position + randomNumber, this.state.board.length - 1),
      board: this.state.board.slice()
    }));
  }

 render() { 
    return (
      <div className="App">
        <div className="Nav">      
          <div className="Box" style={{gridColumn: 1, gridRow: 1}} onClick={this.onReset}>"Play"</div>
          <div className="Box" style={{gridColumn: 6, gridRow: 1}}>"Score"</div>
          <div className="Box" style={{gridColumn: 7, gridRow: 1}}>{this.state.score}</div>
        </div>
        <div className="Messages">       
              <h4 className="message">{message}</h4>
              <h5 className="optMessage">{optMessage}</h5>
        </div>
        <div className="Board">
            <div 
              className={`Box${this.state.position <= this.state.board.length - 2 ? "" : '2'}`}
              style={{gridColumn: 4, gridRow: 1}} 
              onClick={this.onRoll}>"Roll"</div>
            <div 
              className={`Box${this.state.position <= this.state.board.length - 2 ? "" : '2'}`}
              style={{gridColumn: 4, gridRow: 2}}>{this.state.roll}</div>
          {
              this.state.board.map((item, index) => (
                <div key={index}
               className={`Box${this.state.position === index ? " markSpot" : ''}`}
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