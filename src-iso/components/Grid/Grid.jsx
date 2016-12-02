import React, { PropTypes, Component, createElement } from 'react'

import Layout from './layout'
import Block from './Block'

import { Vector, random, max, round } from 'modules/math'
import classNames from 'classnames'

import is from 'is-explicit'

/******************************************************************************/
// Exports
/******************************************************************************/

export default class Grid extends Component {

  state = {
    blocks: []
  }

  static propTypes = {
    component: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(Object).isRequired,
    layout: PropTypes.instanceOf(Layout).isRequired,
    sizeFunc: PropTypes.func,
    clip: PropTypes.bool
  }

  static defaultProps = {
    component: Block,
    layout: new Layout(),
    clip: true,
    sizeFunc: () => {
      const width = 4 + random() * 5
      const height = width - 1

      return { width, height}
    }
  }

  createNewCoords = item => {

    let { width, height } = this.props.sizeFunc(item)

    width = max(round(width), 1)
    height = max(round(height), 1)

    return new Layout.Coords(0,0,width, height)

  }

  applyLayoutTimeout = props => {
    if (is(this.layoutTimer))
      clearTimeout(this.layoutTimer)

    this.layoutTimer = setTimeout(() => this.applyLayout(props), 100)
  }

  createBlocksFromItems(items = []) {
    return items
      .map(item => {
        return {
          item,
          coords: this.createNewCoords(item)
        }
      })
  }

  needsUpdate(items) {
    const { blocks } = this.state

    let allSmall = true

    blocks.forEach(block => {
      if (block.coords.dim.x > 0 || block.coords.dim.y > 0)
        allSmall = false
    })

    if (allSmall)
      return true

    const blockItems = blocks.map(block => block.item)
    for (let i = 0; i < items.length; i++)
      if (!blockItems.includes(items[i]))
        return true

    return items.length === 0 || blocks.length === 0
  }

  applyLayout = (props, resize) => {
    props = props || this.props

    const { layout, items } = props
    const { ref } = this

    const needsUpdate = resize || this.needsUpdate(items)
    const blocks = needsUpdate
      ? this.createBlocksFromItems(items)
      : this.state.blocks

    layout.bounds = ref.getBoundingClientRect()

    if (needsUpdate) {
      layout.apply(blocks)
      this.spliceBlocks(blocks)
    }
  }

  resize = () => {
    this.applyLayout(this.props, true)
  }

  spliceBlocks(input) {
    let output = this.state.blocks

    if (input.length < output.length) {
      output.splice(0, input.length, ...input)
      for (let i = input.length; i < output.length; i++)
        output[i].coords.dim = Vector.zero
    } else
      output = input

    this.setState({ blocks: output })
  }

  createBlocks() {
    const { blocks } = this.state
    return blocks.map(this.createBlock)
  }

  createBlock = (block, i) => {

    const { coords, item } = block
    const { layout, component } = this.props
    const { dimension } = layout

    const style = {
      left: coords.pos.x * dimension,
      top: coords.pos.y * dimension,
      width: coords.dim.x * dimension,
      height: coords.dim.y * dimension
    }

    return createElement(component, { style, item, key: i })
  }

  componentDidMount() {
    this.applyLayout()
    addEvent('resize', window, this.resize)
  }

  componentWillUnmount() {
    removeEvent('resize', window, this.resize)
  }

  componentWillReceiveProps(props) {
    this.applyLayoutTimeout(props)
  }

  render() {

    const { layout, className, clip, ...other } = this.props
    const { blocks, dimension } = layout

    let style = other.style
    if (clip && blocks && dimension) {
      style = style || {}
      style.height = blocks.max.y * dimension
    }

    const classes = classNames('grid', className)

    delete other.component
    delete other.items
    delete other.layout
    delete other.getCellId
    delete other.sizeFunc
    delete other.style
    delete other.className

    return <div className={classes} style={style} ref={ref => this.ref = ref} {...other}>
      { this.createBlocks() }
    </div>

  }
}
