import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Page from './pages'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:page" component={Page} />
    </Switch>
  </Router>
)

export default App
