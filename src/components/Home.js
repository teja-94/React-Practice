import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Regis from './registration'

function Home() {
    return (
        <div>
             <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Redirect exact from="/" to="/jome" />
  <Route path="/home">
    <Home />
  </Route>
                </Switch>
        </div>
    )
}

export default Home

