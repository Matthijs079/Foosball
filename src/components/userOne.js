import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userOne } from '../actions/userAction';
import { UpdateApi, Count } from '../actions/fetchAction'

class UserOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      userone: ''
		}

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.SubmitUser = this.SubmitUser.bind(this);
    this.Passgoal = this.Passgoal.bind(this);
  }

  onUpdateUser(e){
    this.setState({ userone: e.target.value })
  }
  
  SubmitUser(e){
    e.preventDefault();
    this.props.SubmitUser(this.state.userone);
  }

  Passgoal(){
    console.log(this.state.userone)
    const post ={
      player: this.state.userone,
			team: 'White',
    }
    
    console.log(post.player)
    this.props.Passgoal(post);
    const team={
      team: "White"
    }
    this.props.White(team);
  }
  
  render() {
    return (
		<div className="team topleft">
			<form onSubmit={this.SubmitUser} className="team__white">
        <label className="team__white-title">Team White</label>
        <input className="input" type="text" name="title" onChange={this.onUpdateUser} value={this.state.userone}/>
				<button className="button" type="submit" onClick={this.SubmitUser}>Submit</button>
			</form>
      <button onClick={this.Passgoal} className="button goal">Goal</button>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
  return{
    userone: state.userone
  }
};

const mapActionsToProps = {
    SubmitUser: userOne,
    Passgoal: UpdateApi,
    White: Count
};


export default connect(mapStateToProps, mapActionsToProps) (UserOne);
