import 'normalize.css'
import './styles/main.scss'

import './polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Router, browserHistory} from 'react-router'

import { loadPortfolios, loadVideos } from 'modules/data-loader'

import routes from 'modules/routes'
/******************************************************************************/
// Setup
/******************************************************************************/

window.onload = () => {

  const mainTag = document.getElementsByTagName('main')[0]

  loadPortfolios()
  loadVideos()

  ReactDOM.render(<Router routes={routes} history={browserHistory}/>, mainTag)

}

/******************************************************************************/
// Routes
/******************************************************************************/
