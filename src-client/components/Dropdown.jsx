import React from 'react'
import TitleText from './TitleText'

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      open: false
    }
  }

  render() {
    const { className } = this.props

    return <div className={`dropdown ${className}`}>
      <TitleText className="clickable" style={{fontSize: '4vw'}}>DROPDOWN</TitleText>
    </div>
  }
}
