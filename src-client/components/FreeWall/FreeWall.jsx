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
      gutterY: 0,
      gutterX: 0,
      delay: 5
    })
    this.resize()
  }

  resize() {
    if (this.freewall && this.dom)
      this.freewall.fitWidth(this.dom.offsetWidth)
  }

  componentDidMount() {
    this.freewall = new Freewall(`#${this.props.id}`)

    $(window).on('resize', this.resize)
    $(window).on('reset', this.reset)
    $(window).trigger('reset')
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

    const { id, className, children } = this.props

    return <div id={id} className={className} ref={div => this.dom = div}>
      {children}
    </div>
  }

}

export const DefaultDimension = 50

export const DefaultTargetHeight = 500
