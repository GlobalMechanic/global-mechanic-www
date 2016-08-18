/******************************************************************************/
// Dependencies
/******************************************************************************/

import React from 'react'
import BlockManager from './block-manager'
import Block from './Block'

/******************************************************************************/
// Exports
/******************************************************************************/

export default class FreeWall extends React.Component {

  constructor(props) {
    super(props)
    this.manager = new BlockManager(this)
    this.state = { blocks: [] }
  }

  componentDidMount() {
    addEvent(window, 'resize', this.manager.calculate)
    this.manager.calculate()
  }

  componentWillUnmount() {
    removeEvent(window, 'resize', this.manager.calculate)
  }

  render() {

    return <div className='freewall'>
      {
        this.state.blocks.map((data,i) =>
        <Block key={i} data={data} dimension={this.props.dimension}>
          {data.child}
        </Block>)
      }
      </div>
  }

}
