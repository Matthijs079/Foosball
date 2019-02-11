import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import store from './store'
import Stats from './components/stats'
import NotFound from './components/404'
import App from './App';

const Root = () => (
  <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/stats" component={Stats} />
          <Route path="*" component={NotFound} />
        </Switch>
  </Provider>
)


export default (Root)