temp code for Navbar
        <div>
            <button onClick={this.onReset}>Play</button>
            <button onClick={this.onRoll}>Roll</button>
            <label>{this.state.roll ?? ''}</label> 
         </div> 
         <div>        
            <h4 className="message">{message}</h4>
            <h5 className="optMessage">{optMessage}</h5>
        </div>


        className={`Box${item.isSpotVisible ? " spotVisible"    : ''}


        className={`Box${item.isSpotVisible ? " spotVisible"    : ''}
                  ${item.isCurrentSpot ? " markSpot"    : ''}`} 


        className={`Box${this.state.position === index ? " Highlight" : ''}`}