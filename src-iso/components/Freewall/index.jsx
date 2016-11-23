import React, { PropTypes, Component, createElement } from 'react'
import is from 'is-explicit'

const { floor, max } = Math

function Block({coords, dimension, children}) {

  const style = {
    top: coords.top * dimension,
    left: coords.left * dimension,
    width: coords.width * dimension,
    height: coords.height * dimension,
  }

  return <div className='block' style={style}>{children}</div>
}

export default class Freewall extends React.Component {

  state = {
    data: []
  }

  static propTypes = {
    dimension: PropTypes.number.isRequired
  }

  static defaultProps = {
    dimension: 50
  }

  floorCoord = axis => {

    if (!is(axis, Number))
      return 1

    const { dimension } = this.props

    return max(floor(axis / dimension), 1)
  }

  getCoords(child, index) {
    const { data } = this.state

    if (data[index])
      return data[index].coords

    const { style } = child.props

    return {

      width: this.floorCoord(style.width),
      height: this.floorCoord(style.height),
      top: 0,
      left: 0

    }
  }

  canFill(coords, grid, limits) {

    for (let x = coords.left; x < coords.left + coords.width; x++ ) {
      for (let y = coords.top; y < coords.top + coords.height; y++ ) {
        if (grid[x + '-' + y] || x >= limits.cols || y >= limits.rows)
          return false
      }
    }

    return true
  }

  fill(coords, grid) {
    for (let x = coords.left; x < coords.left + coords.width; x++ )
      for (let y = coords.top; y < coords.top + coords.height; y++ )
        grid[x + '-' + y] = true
  }

  place(coords, grid, limits) {

    coords.left = 0
    coords.top = 0

    for (let y = 0; y < limits.rows; y++ ) {
      for (let x = 0; x < limits.cols; x++ ) {
        coords.left = x, coords.top = y
        if (this.canFill(coords, grid, limits))
          return this.fill(coords, grid)

      }
    }

  }

  pluckLargest(data) {

    let area = null
    let index = 0

    for (let i = 0; i < data.length; i++) {
      const curr = data[i].coords
      const currArea = curr.width * curr.height

      if (area === null || area < currArea) {
        area = currArea
        index = i
      }
    }

    return data.splice(index, 1)[0]
  }

  placeAll = children => {

    const grid = {}

    const contain = this.ref.getBoundingClientRect()
    const limits = {
      cols: this.floorCoord(contain.width),
      rows: Infinity
    }

    const data = children.map((child, i) => {
      return {
        coords: this.getCoords(child, i),
        child
      }
    })

    const unplaced = data.slice()
    while (unplaced.length > 0) {
      const smallest = this.pluckLargest(unplaced)
      this.place(smallest.coords, grid, limits)
    }

    this.setState({ data })
  }

  componentDidMount() {
    this.placeAll(this.props.children)
    addEvent('resize', window, () => this.placeAll(this.props.children))
  }

  componentWillReceiveProps(props) {
    this.placeAll(props.children)
  }

  render() {

    const { data } = this.state

    return <div className='freewall' ref={ref => this.ref = ref}>{
      data.map(d => <Block coords={d.coords} dimension={this.props.dimension}>{d.child}</Block>)
    }</div>

  }
}
