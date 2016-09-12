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
  ReactDOM.render(<Website/>, document.getElementsByTagName('main')[0])
  loadPortfolios()
  loadVideos()
}

/******************************************************************************/
// Routes
/******************************************************************************/

function Website() {

  return <Router history={browserHistory}>
    <Route path='/' component={Navigation}>
      <IndexRoute component={Splash} />
      <Route path='/directors' component={Directors}/>
      <Route path='/work/:portfolio' inverse component={Work}>
        {/* <Route path='/work/:portfolio/:video' component={Video}/> */}
      </Route>
      <Route path='/about' component={About}>
        <Route path='/about/:staff' component={About}/>
      </Route>
    </Route>
  </Router>
}
