import React from 'react';
import './App.css';

const NUMBER_OF_BOXES = 10;

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
              <div key={index} className={`Box${this.state.position === index ? " Highlight" : ''}`} />
            ))
          }
        </div>
      </div>
    );      
  }
}

export default App;

// className={`Box${this.state.position === index ? " Highlight" 
//                 : detour1 === "yes"            ?  "Detour1-visible"
//                 : detour2 === "yes"            ?  "Detour2-visible"
//                :  detour3 === "yes"            ?  "Detour3-visible"
//                :  (detour3 === "yes" || switch = 2) ?  "Detour3-visible"
//                : ''}`}