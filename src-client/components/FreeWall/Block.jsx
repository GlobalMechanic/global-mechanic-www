import React from 'react'
import { FixSize } from './layout-manager'

export default class Block extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      position: {x:0, y:0},
      width: 1,
      height: 1
    }
  }

}
