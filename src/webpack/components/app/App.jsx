import React from 'react'

import { Provider as StoreProvider } from 'mobx-react'
import { Router } from 'react-router'
import { object } from 'prop-types'
import Website from 'global-mechanic-gears/components/website'

/******************************************************************************/
// Component
/******************************************************************************/

const App = ({ stores, history, children }) =>
  <StoreProvider {...stores} >
    <Router history={history}>
      <Website />
    </Router>
  </StoreProvider>

App.propTypes = {
  history: object.isRequired,
  stores: object.isRequired
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default App
