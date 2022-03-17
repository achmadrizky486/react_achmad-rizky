import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Contact_Us from './Contact_Us'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact_Us" exact component={Contact_Us} />
      </Switch>
    </BrowserRouter>
  )
}

export default App