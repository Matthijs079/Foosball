import React, { Component } from 'react';
import './App.css';
import User from './components/user'
import Newgame from './components/startGame'
import Score from './components/score'

class App extends Component {

  render() {
    return (
        <div className="App">
            <User user="one"/>
            <User user="two"/>
            <User user="three"/>
            <User user="four"/>
            <Newgame />
            <Score color="Orange"/>
            <Score color="White"/>
            <div className="round"></div>
            <div className="midline"></div>
        </div>
    );
  }
}

export default (App);
