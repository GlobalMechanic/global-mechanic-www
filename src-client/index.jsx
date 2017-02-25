import './polyfill'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from 'components'

import 'global-mechanic-components/src/styles/index.scss'
import 'styles/index.scss'

const Website = () =>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>

/******************************************************************************/
// Setup
/******************************************************************************/

window.onload = () => {
  const mainTag = document.getElementsByTagName('main')[0]
  render(<Website/>, mainTag)
}
