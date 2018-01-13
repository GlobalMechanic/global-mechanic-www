import 'global-mechanic-gears/global'

import React from 'react'
import { render } from 'react-dom'
import Www from './components/www'

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

addEventListener(window, 'load', async () => {

  const mainTag = document.getElementById('global-mechanic')

  // TODO
  // This is temporary. This needs to work with rest, not socket.io
  // and it needs to connect to the www server, not gears directly.
  await stores.network.connectToServer()
  await stores.network.client.authenticate({
    strategy: 'local',
    email: 'studio@globalmechanic.com',
    password: 'L0bst3r!'
  })

  render(<Www history={history} stores={stores} />, mainTag)

})
