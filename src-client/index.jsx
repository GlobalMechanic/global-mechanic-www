import './polyfill'
import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'

/******************************************************************************/
// Setup
/******************************************************************************/

window.onload = () => {

  const mainTag = document.getElementsByTagName('main')[0]

  
  ReactDOM.render(<h1>Website Starter</h1>, mainTag)

}
