import React, { PropTypes } from 'react'
import { Grid, Block } from './Grid'
import { showcases, products } from 'modules/data'
import { urlify, navigate } from 'modules/helper'
import classNames from 'classnames'
import { variables } from 'styles'
import is from 'is-explicit'
import fetch from 'isomorphic-fetch'

import gif from 'assets/gif.svg'
import image from 'assets/image.svg'
import video from 'assets/video.svg'
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

function Image({id, back, className}) {
  const classes = classNames(className, 'product-image')

  const href = `${HOST}/assets/file/${id}`

  return <div className={classes} onClick={back}>
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

  const item = hasFeature
    ? items.filter(item => {
      if (item.productType === 'vimeo' && (item._id === featured || urlify(item.name) === featured))
        return true

      if (item.productType === 'gallery' && item.images.includes(featured))
        return true

      return false
    })[0]
    : null

  const video = item ? item.video : null
  const image = item && item.productType === 'gallery' ? item.images.filter(id => id === featured)[0] : null

  const name = (item && item.name ? item.name : '').trim()

  const classes = classNames('product-feature', {
    'product-feature-show': hasFeature,
    'product-feature-video': video,
    'product-feature-image': image
  })

  return <div className={classes}>
    <div className='product-modal' onClick={back}/>
    <div className='product-detail'>
      { image ? <Image id={image} back={back}/> : <Vimeo {...video}/>}
      { image ? null : <ProductTitle name={name} /> }
    </div>
  </div>
}
ProductFeature.contextTypes = {
  path: PropTypes.string.isRequired
}

function ProductBlockIcon({type}) {

  const src = type === 'gif' ? gif
    : type === 'video' ? video
    : image

  const style = {
    backgroundImage: `url(${src})`
  }


  return type ? <div style={style} className='product-block-icon'/> : null
}

class ProductBlock extends React.Component {

  state = {
    type: false
  }

  setIconType = image => {

    const { item } = this.props
    const itemIsImage = is(item, String)

    if (itemIsImage)
      fetch(image.src.replace('-thumb', ''))
        .then(res => {
          const mime = res.headers.get('content-type')
          const iconType = mime.replace('image/', '')
          this.setState({ iconType })
        })
    else
      this.setState({ iconType: 'video'})
  }

  render() {

    const { item, ...other } = this.props
    const { path, showIcons } = this.context

    //bc
    const itemIsImage = is(item, String)
    const imageId = item ? itemIsImage ? item : item.portrait : null
    const pathSuffix = itemIsImage ? imageId : urlify(item.name)

    const onClick = imageId ? () => navigate(`${path}/${pathSuffix}`) : null

    return <Block imageId={imageId} onClick={onClick} {...other} onImageLoad={showIcons ? this.setIconType : null} >
      { showIcons ? <ProductBlockIcon type={this.state.iconType}/> : null }
    </Block>
  }
}
ProductBlock.contextTypes = {
  path: PropTypes.string.isRequired,
  showIcons: PropTypes.bool
}

export default class Showcase extends React.Component {

  state = {
    products: [],
    items: []
  }

  static childContextTypes = {
    path: PropTypes.string.isRequired,
    showIcons: PropTypes.bool
  }

  setProducts = props => {

    const { featuredShowcase } = props || this.props

    showcases.then(shows => {
      const showcase = shows.filter(show => urlify(show.name) === featuredShowcase || show._id === featuredShowcase)[0]

      if (!showcase)
        return null

      products.then(prods => {

        let showIcons = false
        const products = prods.filter(prod => showcase.products.includes(prod._id))
        const items = []

        products.forEach(product => {
          if (product.productType === 'vimeo')
            items.push(product)
          else {
            showIcons = true
            items.push(...product.images)
          }
        })

        this.setState({
          products,
          items,
          showIcons
        })
      })
    })
  }

  componentDidMount() {
    setTimeout(this.setProducts, variables.animationTime.value)
  }

  componentWillReceiveProps(next) {
    this.setProducts(next)
  }

  getChildContext() {
    const { path } = this.props
    const { showIcons } = this.state
    return {
      path,
      showIcons
    }
  }

  render() {

    const { featuredProduct, className, ...other } = this.props
    const { products, items } = this.state

    delete other.path
    delete other.featuredShowcase
    delete other.onImageLoad

    const classes = classNames('showcase', className)

    return <div className={classes} ref={ref => this.ref = ref}>
      <ProductFeature items={products} featured={featuredProduct} />
      <Grid items={items} component={ProductBlock} {...other} />
    </div>
  }

}
