import React, { Component, PropTypes } from 'react'
import { urlify, navigate } from 'modules/helper'
import classNames from 'classnames'

const CARET_POINTS = ['17.3','28.2 1','0 33.5','0']

function Caret({hidden}) {

  const classes = classNames('dropdown-caret', { hidden })
  return <svg className={classes} viewBox='0 0 34.3 28.7'>
    <polygon points={CARET_POINTS}/>
  </svg>
}

function Title({items, onClick, children}) {

  const classes = classNames({
    'clickable': items.length > 0
  })

  const caret = <Caret hidden={items.length === 0}/>
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
    items: [],
    inverse: false
  }

  state = {
    open: false
  }

  toggle = e => {
    e.stopPropagation()
    e.preventDefault()
    this.setState({open: !this.state.open})
  }

  close = () => {
    this.setState({open: false})
  }

  select = value => {
    const { path } = this.props
    navigate(`/${path}${value}`)
  }

  componentDidMount() {
    addEvent('click', window, this.close)
  }

  componentWillUnmount() {
    removeEvent('click', window, this.close)
  }

  render() {

    const { title, items, selected, inverse } = this.props
    const dropdownClasses = classNames('dropdown', {
      'dropdown-open': this.state.open
    })

    const containerClasses = classNames('dropdown-container', 'transition-fade', {
      'inverse': inverse
    })

    return <div className={containerClasses}>
      <div className={dropdownClasses}>
        <Title items={items} onClick={this.toggle}>{title}</Title>
        <List items={items} selected={selected} select={this.select}/>
      </div>
    </div>

  }

}
