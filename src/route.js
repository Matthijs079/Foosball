import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Stats from './components/stats'
import App from './App';

const Root = () => (
  <Provider store={store}>
   <Router>
        <Route path="/" component={App} />
    </Router>
	  <Router>
      <Route path="/stats" component={Stats} />
    </Router>
  </Provider>
)


export default Root