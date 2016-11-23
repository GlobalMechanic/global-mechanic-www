import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

const CARET_POINTS = ['17.3','28.2 1','0 33.5','0']

function Caret() {
  return <svg className='dropdown-caret' viewBox='0 0 34.3 28.7'>
    <polygon points={CARET_POINTS}/>
  </svg>
}

function Title({items, onClick, children}) {

  const classes = classNames({
    'clickable': items.length > 0
  })

  const caret = items.length > 0 ? <Caret/> : null
  const click = items.length > 0 ? onClick : null

  return <h1 className={classes} onClick={click}>{children}{caret}</h1>
}

function List({items}) {

  if (items.length === 0)
    return null

  return <ul>{
    items.map((item, i) => <li className='clickable' key={i}>{item}</li>)
  }</ul>
}

export default class Dropdown extends Component {

  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
  }

  static defaultProps = {
    items: []
  }

  state = {
    open: false
  }

  toggleOpen = e => {
    e.preventDefault()
    this.setState({open: !this.state.open})
  }


  setSelected = (e, value) => {

  }

  render() {

    const { title, items } = this.props
    const classes = classNames('dropdown', {
      'dropdown-open': this.state.open
    })

    return <div className='dropdown-container'>
      <div className={classes}>
        <Title items={items} onClick={this.toggleOpen}>{title}</Title>
        <List items={items}/>
      </div>
    </div>

  }

}
