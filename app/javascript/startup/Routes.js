import React from 'react'
import { Router, Switch, Route } from 'react-router'
import MainContainer from '../containers/MainContainer'
import Notfound from '../containers/Notfound'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class Routes extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    )
  }
}

export default Routes