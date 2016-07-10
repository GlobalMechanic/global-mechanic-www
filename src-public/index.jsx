import './index.html'

import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { About, Directors, Work, Splash, Portfolio } from './components/pages'
import { Navigation } from './components'

const routes = <Router history={browserHistory}>
  <Route path="/" component={Navigation}>
    <IndexRoute component={Splash}/>
    <Route path="/about" component={About}/>
    <Route path="/directors" component={Directors}/>
    <Route path="/work" component={Work}>
      <Route path="/portfolios/:portfolio/:video" component={Portfolio}/>
    </Route>
  </Route>
</Router>

window.onload = () => {
  ReactDOM.render(routes, document.getElementsByTagName('main')[0])
}
