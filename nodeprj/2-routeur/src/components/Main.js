import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Voiture from './Voiture'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /voiture routes will match any pathname that starts
// with /roster or /voiture. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/voitures' component={Voiture}/>
    </Switch>
  </main>
)

export default Main
