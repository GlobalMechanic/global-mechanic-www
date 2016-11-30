import React, { PropTypes } from 'react'
import Grid from './Grid'
import { browserHistory } from 'react-router'
import { showcases, products } from 'modules/data'
import { urlify } from 'modules/helper'
import classNames from 'classnames'
import { max, min } from 'modules/math'
/* global HOST */


function Video({info, show, style}) {
  const classes = classNames('product-video', {
    'product-video-show': show
  })

  if (show) {
    style.width = min(info.width, innerWidth)
    style.height = min(info.height, innerHeight)
    style.top = max((innerHeight - style.height) * 0.5, 0)
    style.left = max((innerWidth - style.width) * 0.5, 0)
  }

  return <div className={classes} style={style}/>
}

function Product({item, style, isFeatured}, {path}) {

  const thumbStyle = {
    backgroundImage: `url(${HOST}/assets/file/${item.portrait})`
  }

  const classes = classNames('product', {
    'product-featured': isFeatured
  })

  const id = urlify(item.name)

  const targetPath = (path + '/' + id).replace(/\/\//g, '/')

  const click = () => browserHistory.push(targetPath)

  return <div>
    <div className={classes} style={style} onClick={click} >
      <div className='product-image' style={thumbStyle}/>
    </div>
    <Video info={item.video} show={isFeatured} style={style}/>
    <div className='product-modal'/>
  </div>

}
Product.contextTypes = {
  path: PropTypes.string.isRequired
}

export default class Showcase extends React.Component {

  state = {
    showcases: [],
    products: []
  }

  static childContextTypes = {
    path: PropTypes.string.isRequired
  }

  componentDidMount() {
    products.then(res => this.setState({products: res}))
    showcases.then(res => this.setState({showcases: res}))
  }

  getChildContext() {
    const { path } = this.props
    return {
      path
    }
  }

  render() {

    const { featuredShowcase, featuredVideo, ...other } = this.props
    const { showcases, products } = this.state

    const showcase = showcases.filter(show => urlify(show.name) === featuredShowcase || show._id === featuredShowcase)[0]
    const items = showcase ? products.filter(product => showcase.products.includes(product._id)) : []

    delete other.path

    return <Grid items={items} component={Product} getCellId={item => urlify(item.name)}
      className='showcase' {...other} featured={featuredVideo}/>
  }

}
