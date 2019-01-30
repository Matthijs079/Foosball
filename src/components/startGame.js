import React, { Component } from 'react'
import { CreateGame } from '../actions/fetchAction'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Stats from '../components/stats'

class startGame extends Component {
	constructor(props){
		super(props)
		this.state = {
			game: ''
		}

		this.Gameid = this.Gameid.bind(this)
	}

	Gameid(){
		this.props.Gameid()
	}

	Statistics = () => (
		<Router>
			<Route path="/stats" component={Stats} />
		</Router>
	)
	
  render() {
		if(this.props.orange > 10 || this.props.white > 10){
			return (
				<button onClick={this.Statistics} className="start">Goedemorge</button>
				)
			}
			else{
				return (
					<button onClick={this.Gameid} className="start">Start Game</button>
					)
		}

  }
}

const mapStateToProps = (state) => {
	return{
		orange: state.apiReducer.orangecount,
		white: state.apiReducer.whitecount
	}
};

const mapActionsToProps = {
	Gameid: CreateGame
};

export default connect(mapStateToProps, mapActionsToProps) (startGame);
