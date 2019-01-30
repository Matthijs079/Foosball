import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userTwo } from '../actions/userAction';
import { UpdateApi, Count } from '../actions/fetchAction';

class UserTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
			usertwo: ''
		}

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.SubmitUser = this.SubmitUser.bind(this);
    this.Passgoal = this.Passgoal.bind(this);
  }

  onUpdateUser(e){
    this.setState({ usertwo: e.target.value })
  }

  SubmitUser(e){
    e.preventDefault();
    this.props.SubmitUser(this.state.usertwo);

  }

  Passgoal(){
    const post ={
      player: this.state.usertwo,
			team: 'White',
      
		}
    console.log(post.player)
    this.props.Passgoal(post);
    const team={
      team: "White"
    }
    setInterval(this.props.White(team), 10000)
  }

  
  render() {
    return (
		<div className="team bottomleft">
			<form onSubmit={this.SubmitUser} className="team__white">
				<label className="team__white-title">Team White</label>
				<input className="input" type="text" name="title" onChange={this.onUpdateUser} value={this.state.usertwo}/>
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
    usertwo: state.usertwo
  }
};

const mapActionsToProps = {
    SubmitUser: userTwo,
    Passgoal: UpdateApi,
    White: Count
};


export default connect(mapStateToProps, mapActionsToProps) (UserTwo);
