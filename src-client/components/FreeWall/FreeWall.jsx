/******************************************************************************/
// Dependencies
/******************************************************************************/

import React from 'react'
import { Freewall } from 'freewall'

/******************************************************************************/
// Exports
/******************************************************************************/

export default class FreeWall extends React.Component {

  constructor(props) {
    super(props)
    this.freewall = null
    this.resize = this.resize.bind(this)
  }

  resize() {
    this.freewall && this.dom && this.freewall.fitZone(this.dom.offsetWidth, 500)
  }

  componentDidMount() {
    this.freewall = new Freewall(`#${this.props.id}`)
    this.freewall.reset({
      selector: this.props.selector,
      animate: true,
      cellW: 150,
      cellH: 150,
      gutterX: 0,
      gutterY: 0,
      delay: 10
    })
    this.resize()

    addEvent(window, 'resize', this.resize)
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.resize)
  }

  render() {
    if (!this.props.children)
      return null

    return <div id={this.props.id} ref={div => this.dom = div}>
      {this.props.children}
    </div>
  }

}

export const DefaultDimension = 50

export const DefaultTargetHeight = 500
