import React from 'react'
import TitleText from './TitleText'
import is from 'is-explicit'

function Caret({show}) {

  return show ? <span className='caret'/> : null
}

function Item({value, onSelection}) {
  return <div className='dropdown-item' onClick={(e) => onSelection(e,value)}>
    <TitleText className='medium clickable'>{value.name}</TitleText>
  </div>
}

function List({items, open, onSelection}) {

  return <div className={'dropdown-list' + (open ? ' active' : '')}>
    { items.map(item => <Item key={item.id} value={item} onSelection={onSelection}/>) }
  </div>
}

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.setOpen = this.setOpen.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.clickAnywhereToClose = this.clickAnywhereToClose.bind(this)
  }

  setSelected(e, value) {
    const onSelection = this.props.onSelection

    if (is(onSelection,Function))
      onSelection(e, value)
  }

  setOpen(e, value) {
    e.stopPropagation()

    const open = is(value, Boolean) ? value : !this.state.open
    this.setState({ open })
  }

  clickAnywhereToClose() {
    this.setState({ open: false })
  }

  componentDidMount() {
    $(window).click(this.clickAnywhereToClose)

    if (this.props.open)
      this.setOpen()
  }

  componentWillUnmount() {
    $(window).off('click', this.clickAnywhereToClose)
  }

  render() {
    const { className, items, titleOnly, ...other } = this.props
    const { open } = this.state

    return <div className={`dropdown padded inverse ${className || ''}`} {...other}
      onClick={titleOnly ? null : this.setOpen} >
      <h1 className={titleOnly ? '': 'clickable'} >{this.props.title}<Caret show={!!this.props.title && !titleOnly}/></h1>
      {titleOnly ? null : <List items={items} open={open} onSelection={this.setSelected} $dom={this.$dom}/>}
    </div>
  }

}
