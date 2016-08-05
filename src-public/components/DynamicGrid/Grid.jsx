import React from 'react'
import Cell from './Cell'
import CellData from './cell-data'
import LayoutManager from './layout-manager'

/******************************************************************************/
// Helper
/******************************************************************************/

/******************************************************************************/
// Exports
/******************************************************************************/
export default class Grid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.children.map(child => new CellData({content: child})),
      dimension: 50
    }
    this.layout = new LayoutManager(this)
    this.applyLayout = this.layout.apply.bind(this.layout)
  }

  componentDidMount() {
    addEvent(window, 'resize', this.applyLayout)
    this.applyLayout()
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.applyLayout)
  }

  render() {
    let height = this.props.targetHeight || void 0
    return <div className='dynamic-grid' ref={dom => this.dom = dom} style={{height}}>{
      this.state.data.map((d,i) =>
        <Grid.Cell
          key={i}
          data={d.data}
          dimension={this.state.dimension}>{d.content}
        </Grid.Cell>)}</div>
  }

}

Grid.Cell = Cell
