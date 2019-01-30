import React, { Component } from 'react'
import { connect } from 'react-redux';

class orangeCount extends Component {

	render() {
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
}

const mapStateToProps = (state) => {
	return{
		gamecount: state.apiReducer.gamecount,
		orange: state.apiReducer.orangecount
	}
  };


export default connect(mapStateToProps) (orangeCount)