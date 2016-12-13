import React, { PropTypes } from 'react'
import { Grid, Block } from './Grid'
import { showcases, products } from 'modules/data'
import { urlify, navigate } from 'modules/helper'
import classNames from 'classnames'
import { variables } from 'styles'
import is from 'is-explicit'

/* globals HOST */

export function Vimeo({vimeoId, className, ...other}) {

  const classes = classNames(className, 'product-video')

  return <div className={classes} {...other}>
    { vimeoId
      ? <iframe src={`//player.vimeo.com/video/${vimeoId}?badge=0&title=0&portrait=0&byline=0&embed=0&autoplay=0`}
        frameBorder={false}/>
      : null }
  </div>
}

function Image({id, className}) {
  const classes = classNames(className, 'product-image')

  const href = `${HOST}/assets/file/${id}`

  return <div className={classes}>
    <a href={href}>
      <img src={href} />
    </a>
  </div>
}

export function ProductTitle({name, className}) {

  const classes = classNames(className, 'product-title')
  return name ? <h2 className={classes}>{name}</h2> : null
}

function ProductFeature({items, featured}, {path}) {

  const back = () => navigate(path)
  const hasFeature = !!featured

  const classes = classNames('product-feature', {
    'product-feature-show': hasFeature
  })

  const item = hasFeature
    ? items.filter(item => {
      const isVimeo = item.productType === 'vimeo'
      if (isVimeo && urlify(item.name) === featured)
        return true

      if (!isVimeo && item.images.includes(featured))
        return true

      return false
    })[0]
    : null

  const video = item ? item.video : {}
  const image = item && item.productType ? item.images.filter(id => id === featured)[0] : null

  const name = (item && item.name ? item.name : '').trim()

  return <div className={classes}>
    <div className='product-modal' onClick={back}/>
    <div className='product-detail'>
      { image ? <Image id={image}/> : <Vimeo {...video}/>}
      { image ? null : <ProductTitle name={name} /> }
    </div>
  </div>
}
ProductFeature.contextTypes = {
  path: PropTypes.string.isRequired
}

function ProductBlock({ item, ...other }, { path }) {

  const itemIsId = is(item, String)
  const imageId = item ? itemIsId ? item : item.portrait : null

  const onClick = imageId ? () => navigate(`${path}/${imageId}`) : null

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

    const allProducts = showcase
      ? products.filter(product => showcase.products.includes(product._id))
      : []

    const vimeoProducts = allProducts.filter(product => product.productType === 'vimeo')
    const galleryProducts = allProducts.filter(product => product.productType === 'gallery')

    delete other.path

    const classes = classNames('showcase', className)

    return <div className={classes} ref={ref => this.ref = ref}>
      <ProductFeature items={allProducts} featured={featuredProduct} />
      <Grid items={vimeoProducts} component={ProductBlock} {...other} />
      {
        galleryProducts.map(gallery => <Grid items={gallery.images} component={ProductBlock} {...other} />)
      }
    </div>
  }

}
