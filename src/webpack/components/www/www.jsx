import React from 'react'

import { Provider as StoreProvider } from 'mobx-react'
import { Router } from 'react-router'
import { object } from 'prop-types'
import Website from 'global-mechanic-gears/components/website'

/******************************************************************************/
// Component
/******************************************************************************/

const Www = ({ stores, history, children }) =>
  <StoreProvider {...stores} >
    <Router history={history}>
      <Website navPrefix='/' >
        { children }
      </Website>
    </Router>
  </StoreProvider>

Www.propTypes = {
  history: object.isRequired,
  stores: object.isRequired
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Www
