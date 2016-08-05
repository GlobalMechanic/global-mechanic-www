import React from 'react'
import LayoutManager from './layout-manager'

export default class FreeWall extends React.Component {

  constructor(props) {
    super(props)
    this.manager = new LayoutManager(props.config)

  }

  render() {
    return <div>FreeWall</div>
  }
}
