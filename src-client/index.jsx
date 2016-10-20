import './index.html'
import './polyfill'

import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { FOO } from 'test'
/******************************************************************************/
// Setup
/******************************************************************************/

window.onload = () => {

  const mainTag = document.getElementsByTagName('main')[0]

  ReactDOM.render(<h1>Global Mechanic Gears Compatible Website {FOO}</h1>, mainTag)

}
