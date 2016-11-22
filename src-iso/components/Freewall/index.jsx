import React, { Component, createElement } from 'react'

const { round } = Math

class Block extends Component {

  state = {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }

  place = () => {

    const bounds = this.ref.getBoundingClientRect()

    const width = bounds.width ? round(bounds.width / 25) * 25 : 25
    const height = bounds.height ? round(bounds.height / 25) * 25 : 25
    const top = bounds.top, left = bounds.left

    this.setState({width, height, top, left})

  }

  componentDidMount() {
    this.place(this.props)
  }

  componentWillReceiveProps(props) {
    this.place(props)
  }

  render() {

    const { children } = this.props

    return <div className='block' style={{...this.state}} ref={ref => this.ref = ref}>{children}</div>
  }

}

Block.defaultProps = {
  dimension: 25
}

export default class Freewall extends React.Component {

  state = {
    blocks: []
  }

  blockify = children => {

    const blocks = children.map(child => child.type === Block ? child : <Block>{child}</Block>)

    this.setState({blocks})
  }

  componentDidMount() {
    this.blockify(this.props.children)
  }

  componentWillReceiveProps(props) {
    this.blockify(props.children)
  }

  render() {

    const { blocks } = this.state

    return <div className='freewall'>{blocks}</div>

  }
}
