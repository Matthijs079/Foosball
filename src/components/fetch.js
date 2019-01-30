import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateApi } from '../actions/fetchAction';
import store from '../store';

class Fetch extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ title: e.target.value })
	}
	
	onSubmit(e){
		e.preventDefault();
		console.log(store.userone)

		const post ={
			player: 'Eelke',
			team: 'White',

		}
		this.props.onSubmit(post);
		
	}

  render() {
    return (
		<div>
			<h1>Add</h1>

			<form onSubmit={this.onSubmit}>
				<div>
					<label>Title</label><br />
					<input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
				</div>
				<br/>
				<button type="submit" onClick={this.onSubmit}>Submit</button>
			</form>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
	return{
	  userone: state.userone,
	  api: state.api
	}
  };
  
  const mapActionsToProps = {
	  onSubmit: UpdateApi
  };
  
  
  export default connect(mapStateToProps, mapActionsToProps) (Fetch);
