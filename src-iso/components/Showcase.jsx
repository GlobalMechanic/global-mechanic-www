import React, { PropTypes } from 'react'
import { Grid, Block } from './Grid'
import { showcases, products } from 'modules/data'
import { urlify, navigate } from 'modules/helper'
import classNames from 'classnames'
import { variables } from 'styles'

function Vimeo({vimeoId}) {

  return <div className='product-video' >
    { vimeoId
      ? <iframe src={`//player.vimeo.com/video/${vimeoId}?badge=0&title=0&portrait=0&byline=0&embed=0&autoplay=0`}
        frameBorder={false}/>
      : null }
  </div>
}

function ProductFeature({items, featured}, {path}) {

  const back = () => navigate(path)
  const hasFeature = !!featured

  const classes = classNames('product-feature', {
    'product-feature-show': hasFeature
  })

  const item = hasFeature
    ? items.filter(item => urlify(item.name) === featured)[0]
    : null

  const video = item ? item.video : {}
  // const description = (item && item.description ? item.description : '').trim()
  const name = (item && item.name ? item.name : '').trim()

  return <div className={classes}>
    <div className='product-modal' onClick={back}/>
    <div className='product-detail'>
      <Vimeo {...video}/>
      {name ? <h2 className='product-title'>{name}</h2> : null}
      {/* {description ? <p className='product-description'>{description}</p> : null } */}
    </div>
  </div>
}
ProductFeature.contextTypes = {
  path: PropTypes.string.isRequired
}

function ProductBlock({ item, ...other }, { path }) {

  const imageId = item ? item.portrait : null

  const id = urlify(item.name)
  const onClick = () => navigate(`${path}/${id}`)

  return <Block imageId={imageId} onClick={onClick} {...other} />
}
ProductBlock.contextTypes = {
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

  loadAfterTransition(service, items) {
    setTimeout(() => this.setState({ [service]: items }), variables.animationTime.value)
  }

  componentDidMount() {
    products.then(res => this.loadAfterTransition('products', res))
    showcases.then(res => this.loadAfterTransition('showcases', res))
  }

  getChildContext() {
    const { path } = this.props
    return {
      path
    }
  }

  render() {

    const { featuredShowcase, featuredProduct, className, ...other } = this.props
    const { showcases, products } = this.state

    const showcase = showcases.filter(show => urlify(show.name) === featuredShowcase || show._id === featuredShowcase)[0]
    const items = showcase ? products.filter(product => showcase.products.includes(product._id)) : []

    delete other.path

    const classes = classNames('showcase', className)

    return <div className={classes} ref={ref => this.ref = ref}>
      <ProductFeature items={items} featured={featuredProduct} />
      <Grid items={items} component={ProductBlock} {...other} />
    </div>
  }

}
