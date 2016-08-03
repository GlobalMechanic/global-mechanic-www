import React from 'react'

/******************************************************************************/
// Helper
/******************************************************************************/
const randomHex = () => '#'+Math.floor(Math.random()*16777215).toString(16)
const random = () => Math.round(1 + Math.random() * 4)

/******************************************************************************/
// Exports
/******************************************************************************/
export default class DynamicGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cells }
  }

  render() {
    return <div className='dynamic-grid' >{this.state.cells}</div>
  }

}

DynamicGrid.Cell = props => {

  let gridSize = props.gridSize || 50
  let width = (props.width || 2) * gridSize
  let height = (props.height || 2) * gridSize

  let top = (props.top || 0) * gridSize
  let left = (props.left || 0) * gridSize

  return <div className='dynamic-cell'
    style={{backgroundColor: props.color, width, height, top, left}} />
}
/******************************************************************************/
// Fake Data
/******************************************************************************/
const cells = []

for (let i = 0; i < 20; i++)
  cells.push(<DynamicGrid.Cell key={i}
    color={randomHex()}
    width={random()}
    height={random()} />)
