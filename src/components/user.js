import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userOne, userTwo, userThree, userFour } from '../actions/userAction';
import { UpdateApi, Count } from '../actions/fetchAction'

class UserOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  }

  onUpdateUser = (e) => {
    this.setState({ user: e.target.value })
  }
  
  SubmitUser = (e) => {
    e.preventDefault();
    if(this.props.user === "one"){
      this.props.SubmitUser(this.state.user);
    }else if (this.props.user === "two"){
      this.props.SubmitUsertwo(this.state.user);
    }else if (this.props.user === "three"){
      this.props.SubmitUserthree(this.state.user);
    }else {
      this.props.SubmitUserfour(this.state.user);
    }
  }

  Passgoal = () => {
    const post ={
      player: this.state.user,
			team: '',
    }
    if (this.props.user === "one" || this.props.user === "two"){
      post.team = 'White'
    }else {
      post.team = 'Orange'
    }
    this.props.Passgoal(post);

    let team = {};
    if(this.props.user === "one" || this.props.user === "two"){
      team={
        team: "White"
      }
    }else {
      team={
        team: "Orange"
      }
    }
    this.props.White(team);
  }
  
  render() {
    let position = "";
    if (this.props.user === "one"){
      position = "team topleft"
    }else if (this.props.user === "two"){
      position = "team bottomleft"
    }else if (this.props.user === "three"){
      position = "team topright"
    }else{
      position = "team bottomright"
    }
    return (
		<div className={position}>
			<form onSubmit={this.SubmitUser} className="team__white">
        <label className="team__white-title">{this.state.user}</label>
        <input className="input" type="text" name="title" onChange={this.onUpdateUser} value={this.state.user}/>
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
    SubmitUsertwo: userTwo,
    SubmitUserthree: userThree,
    SubmitUserfour: userFour,
    Passgoal: UpdateApi,
    White: Count
};


export default connect(mapStateToProps, mapActionsToProps) (UserOne);
