/******************************************************************************/
// Dependencies
/******************************************************************************/

import React from 'react'
import Freewall from './freewall-bengaumond-forked'

/******************************************************************************/
// Exports
/******************************************************************************/
const DefaultCellSize = 80

export default class FreeWall extends React.Component {

  constructor(props) {
    super(props)
    this.freewall = null
    this.resize = this.resize.bind(this)
  }

  reset() {
    const { props } = this
    this.freewall.reset({
      selector: this.props.selector,
      animate: 0.4,
      cellW: props.cellSize || DefaultCellSize,
      cellH: props.cellSize || DefaultCellSize,
      gutterX: 0,
      gutterY: 0,
      delay: 5
    })
    this.resize()
  }

  resize() {
    if (this.freewall && this.dom)
      this.freewall.fitWidth(this.dom.offsetWidth, this.props.targetHeight || DefaultTargetHeight)
  }

  componentDidMount() {
    this.freewall = new Freewall(`#${this.props.id}`)
    this.reset()

    $(window).on('resize', this.resize)
  }

  componentWillUnmount() {
    $(window).off('resize', this.resize)
  }

  componentDidUpdate() {
    this.reset()
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
