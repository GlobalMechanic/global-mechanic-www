import React, { Component, PropTypes } from 'react'
import { urlify } from 'modules/helper'
import { browserHistory } from 'react-router'
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

function List({items, selected, select}) {

  if (items.length === 0)
    return null

  return <ul>{

    items.map(item => {

      const id = urlify(item)
      const classes = classNames('clickable', {
        active: selected === id
      })

      return <li className={classes} key={id}
      onClick={() => select(id)} >{item}</li>
    })

  }</ul>
}

export default class Dropdown extends Component {

  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    path: PropTypes.string,
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

  select = value => {
    const { path } = this.props
    browserHistory.push(`/${path}${value}`)

    this.setState({ open: false})
  }

  render() {

    const { title, items, selected } = this.props
    const classes = classNames('dropdown', {
      'dropdown-open': this.state.open
    })

    return <div className='dropdown-container'>
      <div className={classes}>
        <Title items={items} onClick={this.toggleOpen}>{title}</Title>
        <List items={items} selected={selected} select={this.select}/>
      </div>
    </div>

  }

}
