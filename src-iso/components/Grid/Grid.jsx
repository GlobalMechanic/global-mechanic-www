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
    blocks: [],
    gridHeight: null
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

      return { width, height }
    }
  }

  getCoords = (block, item)=> {

    if (block && block.coords)
      return block.coords

    const x = 0, y = 0

    let { width, height } = this.props.sizeFunc(item)
    width = max(round(width), 1)
    height = max(round(height), 1)

    return new Layout.Coords(x, y, width, height)

  }

  applyLayoutTimeout = props => {
    if (is(this.layoutTimer))
      clearTimeout(this.layoutTimer)

    this.layoutTimer = setTimeout(() => this.applyLayout(props), 10)
  }

  createBlocksFromItems(items = []) {

    const blocks = this.state.blocks

    return items
      .map((item, i)=> {
        return {
          item,
          coords: this.getCoords(blocks[i], item)
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

    if (needsUpdate)
      layout.apply(blocks, this.setBlocks)
      .then(this.spliceBlocks)
  }

  setBlocks = (blocks, gridHeight) => {
    this.setState({blocks, gridHeight})
  }

  spliceBlocks = input => {
    let output = this.state.blocks

    if (input.length < output.length) {
      output.splice(0, input.length, ...input)
      for (let i = input.length; i < output.length; i++)
        output[i].coords.dim = Vector.zero
    } else
      output = input

    this.setState({ blocks: output })
  }

  resize = () => {
    this.applyLayout(this.props, true)
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

    const { className, clip, ...other } = this.props
    const { gridHeight } = this.state

    this.gridHeight = is(gridHeight, Number) ? gridHeight : this.gridHeight

    let style = other.style
    if (clip) {
      style = style || {}
      style.height = this.gridHeight
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
