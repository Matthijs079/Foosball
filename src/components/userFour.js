import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFour } from '../actions/userAction';
import { UpdateApi, Count } from '../actions/fetchAction';

class UserFour extends Component {
  constructor(props){
    super(props);
    this.state = {
			userfour: ''
		}

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.SubmitUser = this.SubmitUser.bind(this);
    this.Passgoal = this.Passgoal.bind(this);
  }

  onUpdateUser(e){
    this.setState({ userfour: e.target.value })
  }

  SubmitUser(e){
    e.preventDefault();
    this.props.SubmitUser(this.state.userfour);

  }

  // todo: haal hier de user op en geef deze door aan de post naar de functie in python

  Passgoal(){
    const post ={
      player: this.state.userfour,
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
		<div className="team bottomright">
			<form onSubmit={this.SubmitUser} className="team__white">
					<label className="team__white-title">Team Orange</label>
					<input className="input" type="text" name="title" onChange={this.onUpdateUser} value={this.state.userfour}/>
				  <button className="button" type="submit" onClick={this.SubmitUser}>Submit</button>
			</form>
      <button onClick={this.Passgoal} className="button goal">Goal</button>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
  return{
    products: state.products,
    userfour: state.userfour
  }
};

const mapActionsToProps = {
    SubmitUser: userFour,
    Passgoal: UpdateApi,
    Orange: Count
};


export default connect(mapStateToProps, mapActionsToProps) (UserFour);
