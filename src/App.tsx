import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimateSharedLayout } from 'framer-motion'

import Home from './pages/Home'
import Page from './pages'

const App = () => (
  <Router>
    <AnimateSharedLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:page" component={Page} />
      </Switch>
    </AnimateSharedLayout>
  </Router>
)

export default App
