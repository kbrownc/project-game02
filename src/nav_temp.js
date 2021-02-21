		<div>
			<div>
				<table className="center">
				<tbody>
				<tr><td className = "cellPlay" onClick={() => playBtnHit()}>Play</td>
					<td className="cellNot"></td><td className="cellNot"></td>
					<td className="cellNot"></td><td className="cellNot">
					</td><td className="score">Score</td>
						<td id="scoreNo" className="score">{score}</td></tr>
				</tbody>
				</table>
			</div>
			<div>
				<h4 className="message">{message}</h4>
				<h5 className="optMessage">{optMessage}</h5>
			</div>
		</div>


temp code for onClick
//          {`${item.boxContent === "Roll" ? "onClick={this.onRoll}" : ''}`}

temp code for Navbar
//        <div>
//            <button onClick={this.onReset}>Play</button>
 //           <button onClick={this.onRoll}>Roll</button>
   //         <label>{this.state.roll ?? ''}</label> 
     //    </div> 
       //  <div>        
//            <h4 className="message">{message}</h4>
  //          <h5 className="optMessage">{optMessage}</h5>
    //    </div>.length - 1; i >= 0; i--) {
	
	//          {`${item.boxContent === "Roll" ? "onClick={this.onRoll}" : ''}`}

//        <div>
//            <button onClick={this.onReset}>Play</button>
 //           <button onClick={this.onRoll}>Roll</button>
   //         <label>{this.state.roll ?? ''}</label> 
     //    </div> 
       //  <div>        
//            <h4 className="message">{message}</h4>
  //          <h5 className="optMessage">{optMessage}</h5>
    //    </div>[i]
}