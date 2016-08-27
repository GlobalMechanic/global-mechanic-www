import './index.html'

import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { About, Directors, Work, Splash } from './components/pages'
import { Navigation } from './components'
import { loadPortfolios, loadVideos } from './modules/data-loader'

/******************************************************************************/
// Window Adds
/******************************************************************************/

window.addEvent = function(object, type, callback) {
  if (object.addEventListener)
    object.addEventListener(type, callback, false)
  else if (object.attachEvent)
    object.attachEvent('on' + type, callback)
  else
    object['on'+type] = callback
}

window.removeEvent = function(object, type, callback) {
  if (object.removeEventListener)
    object.removeEventListener(type, callback, false)
  else if (object.detachEvent)
    object.detachEvent('on' + type, callback)
  else
    delete object['on'+type]
}

/******************************************************************************/
// Setup
/******************************************************************************/

window.addEvent(window, 'load', () => {
  ReactDOM.render(<Website/>, document.getElementsByTagName('main')[0])
  loadPortfolios()
  loadVideos()
})

/******************************************************************************/
// Routes
/******************************************************************************/

function Website() {
  return <Router history={browserHistory}>
    <Route path='/' component={Navigation}>
      <IndexRoute component={Splash}/>
      <Route path='/directors' component={Directors}/>
      <Route path='/work/:portfolio' component={Work}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
}
