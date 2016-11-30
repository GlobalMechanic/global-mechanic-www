import React, { PropTypes, Component, createElement } from 'react'
import Layout from './layout'
import { Vector, random, max, round } from 'modules/math'
import is from 'is-explicit'
import classNames from 'classnames'

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
    getCellId: PropTypes.func.isRequired,
    sizeFunc: PropTypes.func,
    autoBounds: PropTypes.bool
  }

  static defaultProps = {
    layout: new Layout(),
    autoBounds: true,
    getCellId: (block, i) => i,
    sizeFunc: () => {
      const width = 3 + random() * 5
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

  applyLayout = props => {
    props = props || this.props

    const { layout, items, featured } = props
    const { ref, state } = this

    const needsUpdate = !featured || state.blocks.length === 0
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
    this.applyLayout()
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


  createCells() {
    const { blocks } = this.state
    return blocks.map(this.createCell)
  }

  createCell = (block, i) => {

    const { coords, item } = block
    const { layout, component, getCellId, featured } = this.props

    const { dimension } = layout
    const id = getCellId(block.item, i)
    const isFeatured = featured && id === featured
    const hasFeatured = is(featured)

    const style = {
      left: coords.pos.x * dimension,
      top: coords.pos.y * dimension,
      width: coords.dim.x * dimension,
      height: coords.dim.y * dimension
    }

    return createElement(component, { style, item, key: i, isFeatured, hasFeatured })
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

    const { layout, className, featured, autoBounds, ...other } = this.props
    const { cells, dimension } = layout

    let style = other.style
    if (autoBounds && cells && dimension && !featured) {
      const unusedWidth = layout.bounds.width % dimension

      style = style || {}
      style.height = cells.max.y * dimension
      style.left = unusedWidth * 0.5
    }

    const classes = classNames('grid', {
      'grid-featured': is(featured)
    }, className)

    delete other.component
    delete other.items
    delete other.layout
    delete other.getCellId
    delete other.sizeFunc
    delete other.style
    delete other.featured
    delete other.className

    return <div className={classes} style={style} ref={ref => this.ref = ref} {...other}>
      {this.createCells()}
    </div>

  }
}
