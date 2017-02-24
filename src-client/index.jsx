import './polyfill'

import React from 'react'
import { render } from 'react-dom'


/******************************************************************************/
// Setup
/******************************************************************************/

window.onload = () => {
  const mainTag = document.getElementsByTagName('main')[0]
  render(<h1>Website</h1>, mainTag)
}
