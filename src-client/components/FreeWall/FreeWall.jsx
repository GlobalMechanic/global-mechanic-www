/******************************************************************************/
// Dependencies
/******************************************************************************/

import React from 'react'
import BlockData from './block-data'
import BlockManager from './block-manager'

/******************************************************************************/
// Exports
/******************************************************************************/

export default class FreeWall extends React.Component {

  constructor(props) {
    super(props)
    this.manager = new BlockManager(this)
  }

  componentDidMount() {
    addEvent(window, 'resize', this.manager.apply)
  }

  componentDidUnmount() {
    removeEvent(window, 'resize', this.manager.apply)
  }

  render() {
    return <div>FREEWALL</div>
  }

}
