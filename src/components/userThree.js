import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userThree } from '../actions/userAction';
import { UpdateApi, Count } from '../actions/fetchAction';

class UserThree extends Component {
  constructor(props){
    super(props);
    this.state = {
			userthree: ''
		}

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.SubmitUser = this.SubmitUser.bind(this);
    this.Passgoal = this.Passgoal.bind(this);
  }

  onUpdateUser(e){
    this.setState({ userthree: e.target.value })
  }

  SubmitUser(e){
    e.preventDefault();
    this.props.SubmitUser(this.state.userthree);

  }

  Passgoal(){
    const post ={
      player: this.state.userthree,
			team: 'Orange',
      
		}
    console.log(post.player)
    setInterval(this.props.Passgoal(post), 1000);
    const team={
      team: "Orange"
    }
    this.props.Orange(team);
  }

  
  render() {
    return (
		<div className="team topright">
			<form onSubmit={this.SubmitUser} className="team__white">
					<label className="team__white-title">Team Orange</label>
					<input className="input" type="text" name="title" onChange={this.onUpdateUser} value={this.state.userthree}/>
				  <button className="button"type="submit" onClick={this.SubmitUser}>Submit</button>
			</form>
      <button onClick={this.Passgoal} className="button goal">Goal</button>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
  return{
    userthree: state.userthree
  }
};

const mapActionsToProps = {
    SubmitUser: userThree,
    Passgoal: UpdateApi,
    Orange: Count
};


export default connect(mapStateToProps, mapActionsToProps) (UserThree);
