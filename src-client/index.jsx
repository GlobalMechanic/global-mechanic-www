import './index.html'
import 'normalize.css'
import './styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './components'
import { Splash, Directors, About, Work } from './pages'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { loadPortfolios, loadVideos } from './modules/data-loader'

/******************************************************************************/
// Setup
/******************************************************************************/

window.onload = () => {

  const mainTag = document.getElementsByTagName('main')[0]

  ReactDOM.render(<Website/>, mainTag)
  loadPortfolios()
  loadVideos()

}

/******************************************************************************/
// Routes
/******************************************************************************/

function Website() {

  return <Router history={browserHistory} >
    <Route path='/' component={Navigation} >
      <IndexRoute component={Splash} />
      <Route path='/directors' inverse component={Directors}/>
      <Route path='/work/:portfolio' inverse component={Work}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
}
