import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LowConnectionPage from 'pages/LowConnectionPage'
import BusinessPage from 'pages/BusinessPage'
import NoAccessPage from 'pages/NoAccessPage'
import Error404 from 'pages/404'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LowConnectionPage} />
    <Route exact path="/empresas" component={BusinessPage} />
    <Route exact path="/semacesso" component={NoAccessPage} />
    <Route component={Error404} />
  </Switch>
)

export default Routes
