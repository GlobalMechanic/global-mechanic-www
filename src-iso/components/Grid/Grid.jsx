import React, { PropTypes, Component, createElement } from 'react'
import Layout from './layout'
import { random, max, round } from 'modules/math'
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
    sizeFunc: PropTypes.func
  }

  static defaultProps = {
    layout: new Layout(),
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

    const { layout, items } = props
    const { ref } = this

    const blocks = this.createBlocksFromItems(items)

    layout.bounds = ref.getBoundingClientRect()
    layout.apply(blocks)

    this.setState({ blocks })
  }

  createCell = (block, i) => {

    const { coords, item } = block
    const { layout, component, getCellId, featuredId } = this.props

    const { dimension } = layout
    const featured = featuredId && getCellId(block.i) === featuredId

    const style = {
      left: coords.pos.x * dimension,
      top: coords.pos.y * dimension,
      width: coords.dim.x * dimension,
      height: coords.dim.y * dimension
    }

    return createElement(component, { style, item, key: getCellId(block,i), featured })
  }

  componentDidMount() {
    this.applyLayout()
  }

  componentWillReceiveProps(props) {
    this.applyLayoutTimeout(props)
  }

  render() {

    const { blocks } = this.state

    const { layout, className, ...other } = this.props

    const { cells, dimension } = layout

    let style = other.style
    if (cells && dimension) {
      let unusedWidth = (cells.limits.x - cells.max.x) * dimension
      unusedWidth += layout.bounds.width % dimension

      style = style || {}
      style.height = cells.max.y * dimension,
      style.left = unusedWidth * 0.5
    }

    const classes = classNames('grid', className)

    delete other.component
    delete other.items
    delete other.layout
    delete other.getCellId
    delete other.sizeFunc
    delete other.style

    return <div className={classes} style={style} ref={ref => this.ref = ref} {...other}>
      {blocks.map(this.createCell)}
    </div>

  }
}
