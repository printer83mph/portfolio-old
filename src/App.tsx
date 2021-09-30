import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimateSharedLayout } from 'framer-motion'

import Home from './pages/Home'
import Page from './pages/Page'

const App = () => (
  <Router>
    <AnimateSharedLayout type="crossfade">
      <Home />
      <Route path="/:page" exact component={Page} />
    </AnimateSharedLayout>
  </Router>
)

export default App
