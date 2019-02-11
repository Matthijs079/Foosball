import React, { Component } from 'react'
import { connect } from 'react-redux';

class orangeCount extends Component {

	render() {
		if(this.props.color === "Orange"){
			let orangecount;
			if (this.props.orange < 10){
				orangecount = (this.props.orange)
	
			}
			else{
				orangecount = ("Team Orange has won")
			}
			return (
				<div className="counter orange">
					<p className="gamecount">{orangecount}</p>
				</div>
			)
		}
		else{
			console.log(this.props.white)
			let whitecount;
			if (this.props.white < 10){
				whitecount = (this.props.white)
	
			}
			else{
				whitecount = ("Team White has won !!!")
			}
			return (
				<div className="counter white">
					<p className="gamecount">{whitecount}</p>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return{
		gamecount: state.apiReducer.gamecount,
		orange: state.apiReducer.orangecount,
		white: state.apiReducer.whitecount
	}
  };


export default connect(mapStateToProps) (orangeCount)