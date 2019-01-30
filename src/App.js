import React, { Component } from 'react';
import './App.css';
// import { Provider } from 'react-redux'
// import store from './store'
import UserOne from './components/userOne'
import UserTwo from './components/userTwo'
import UserThree from './components/userThree'
import UserFour from './components/userFour'
import Newgame from './components/startGame'
import OrangeScore from './components/orangeCount'
import WhiteScore from './components/whiteCount'

class App extends Component {

  render() {
    return (
      // <Provider store={store}>
        <div className="App">
            <UserOne />
            <UserTwo />
            <Newgame />
            <OrangeScore />
            <WhiteScore />
            <div className="round"></div>
            <div className="midline"></div>
            <UserThree />
            <UserFour />
        </div>
      // </Provider>
    );
  }
}

export default (App);
