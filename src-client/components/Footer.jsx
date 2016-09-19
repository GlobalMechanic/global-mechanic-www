import React from 'react'
import is from 'is-explicit'
//this class will keep things stuck to the bottom, because I can't figure out reliable css to do the same

let $window

export default class Footer extends React.Component {

  constructor(props) {
    super(props)

    if (!is(this.props.content, String))
      throw new Error('the content property should be an id')

    this.state = { classes: '', style: null }
    this.dom = null
    this.$this = null
    this.$target = null
    this.calcStyle = this.calcStyle.bind(this)
  }

  calcStyle() {
    if (!$window)
      $window = $(window)

    if (!this.$this)
      this.$this = $(this.dom)

    if (!this.$target)
      this.$target = $('#'+this.props.content)

    if (this.$target.length === 0)
      throw new Error(`Could not find selection with id ${this.props.content}`)

    const bottom = $window.height() > this.$target.height() + this.$target.offset().top + this.$this.height()
    const classes = bottom ? 'bottom' : ''

    this.setState({ classes })
  }

  componentDidMount() {
    $(window).on('resize', this.calcStyle)
    this.calcStyle()
  }

  componentWillUnmount() {
    $(window).off('resize', this.calcStyle)
  }

  render() {
    const { children, className, ...other } = this.props
    const suppliedClass = className || ''
    const classes = suppliedClass + (suppliedClass.length > 0 ? ' ' : '') + this.state.classes
    return <footer className={classes} {...other} ref={dom => this.dom = dom}>
      {children}
    </footer>
  }

}
