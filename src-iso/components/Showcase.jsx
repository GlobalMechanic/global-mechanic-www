import React, { PropTypes } from 'react'
import Grid from './Grid'
import { browserHistory } from 'react-router'
import { showcases, products } from 'modules/data'
import { urlify } from 'modules/helper'
import classNames from 'classnames'

/* global HOST */


function Vimeo({vimeoId}) {

  return <div className='product-video' >
    { vimeoId
      ? <iframe src={`//player.vimeo.com/video/${vimeoId}?badge=0&title=0&portrait=0&byline=0&embed=0`}
        frameBorder={false}/>
      : null }
  </div>
}

function ProductFeature({items, featured}, {path}) {

  const back = () => browserHistory.push(path)
  const hasFeature = !!featured

  const classes = classNames('product-feature', {
    'product-feature-show': hasFeature
  })

  const item = hasFeature
    ? items.filter(item => urlify(item.name) === featured)[0]
    : null

  const video = item ? item.video : {}
  const description = (item && item.description ? item.description : '').trim()
  const name = (item && item.name ? item.name : '').trim()

  return <div className={classes}>
    <div className='product-modal' onClick={back}/>
    <div className='product-detail'>
      <Vimeo {...video}/>
      {name ? <h2 className='product-title'>{name}</h2> : null}
      {description ? <p className='product-description'>{description}</p> : null }
    </div>
  </div>
}
ProductFeature.contextTypes = {
  path: PropTypes.string.isRequired
}

function ProductCell({ isFeatured, hasFeatured, style, item }, {path}) {

  const forward = () => {
    const id = urlify(item.name)
    const to = (path + '/' + id).replace(/\/\//g, '/')

    browserHistory.push(to)
  }

  style.backgroundImage = `url(${HOST}/assets/file/${item.portrait})`
  style.height = isFeatured ? 0 : style.height

  const classes = classNames('product-cell', {
    'product-cell-disabled': hasFeatured
  })

  return <div style={style} className={classes} onClick={forward} />
}
ProductCell.contextTypes = {
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

    const { featuredShowcase, featuredProduct, ...other } = this.props
    const { showcases, products } = this.state

    const showcase = showcases.filter(show => urlify(show.name) === featuredShowcase || show._id === featuredShowcase)[0]
    const items = showcase ? products.filter(product => showcase.products.includes(product._id)) : []

    delete other.path

    return <div>
      <ProductFeature items={items} featured={featuredProduct} />
      <Grid items={items} component={ProductCell} getCellId={item => urlify(item.name)}
        className='showcase' {...other} featured={featuredProduct}/>
    </div>
  }

}
