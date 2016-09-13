/******************************************************************************/
// Dependencies
/******************************************************************************/

import React from 'react'
import Freewall from './freewall-bengaumond-forked'

/******************************************************************************/
// Exports
/******************************************************************************/
const DefaultCellSize = 80
const DefaultAnimTime = 0.4

export default class FreeWall extends React.Component {

  constructor(props) {
    super(props)
    this.freewall = null
    this.resize = this.resize.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    const { animTime, cellSize, selector } = this.props
    this.freewall.reset({
      selector: selector,
      animate: animTime || DefaultAnimTime,
      cellW: cellSize || DefaultCellSize,
      cellH: cellSize || DefaultCellSize,
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
    $(window).on('reset', this.reset)
  }

  componentWillUnmount() {
    $(window).off('resize', this.resize)
    $(window).off('reset', this.reset)
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
