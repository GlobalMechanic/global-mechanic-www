import 'global-mechanic-gears/global'

import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

import Stores from 'global-mechanic-gears/store'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'

import addEventListener from 'add-event-listener'

/******************************************************************************/
// Setup
/******************************************************************************/

const stores = new Stores()
const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, stores.routing)

/******************************************************************************/
// Execute
/******************************************************************************/

addEventListener(window, 'load', () => {

  const mainTag = document.getElementById('global-mechanic')

  render(<App history={history} stores={stores} />, mainTag)

})
