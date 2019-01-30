import React, { Component } from 'react'
import { connect } from 'react-redux';

class orangeCount extends Component {

	render() {
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

const mapStateToProps = (state) => {
	return{
		gamecount: state.apiReducer.gamecount,
		white: state.apiReducer.whitecount
	}
  };


export default connect(mapStateToProps) (orangeCount)