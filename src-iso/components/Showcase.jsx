import React, { PropTypes } from 'react'
import { Grid, Block } from './Grid'
import Image from './Image'
import { showcases, products } from 'modules/data'
import { urlify, navigate } from 'modules/helper'
import classNames from 'classnames'
import { variables } from 'styles'
import is from 'is-explicit'
import fetch from 'isomorphic-fetch'
import Markdown from 'react-markdown'

/******************************************************************************/
// Helpers
/******************************************************************************/

const randomly = () => Math.random() > 0.5
  ? 1
  : -1

/******************************************************************************/
// The Rest of this is a hot mess. Jesus christ I used to be disorganized.
/******************************************************************************/

/* globals HOST */

export function Vimeo({vimeoId, className, ...other}) {

  const classes = classNames(className, 'product-video')

  return <div className={classes} {...other}>
    { vimeoId
      ? <iframe
          src={`//player.vimeo.com/video/${vimeoId}?badge=0&title=0&portrait=0&byline=0&embed=0&autoplay=0`}
          frameBorder={false} allowFullScreen />
      : null }
  </div>
}

function Essay({className, style, children}) {

  if (!is(children, String))
    return null

  return <Markdown className={className} style={style} source={children}/>
}

class Media extends React.Component {

  state = {
    controls: false
  }

  showControls = () => this.setState({controls: true})

  hideControls = () => this.setState({controls: false})

  render() {

    const { poster, src, type } = this.props
    const { controls } = this.state

    return <video className='wip-icon-container'
      controls={controls}
      onMouseEnter={this.showControls}
      onMouseLeave={this.hideControls}
      preload
      style={{
        backgroundImage: `url(${poster})`,
        backgroundSize: '45%', //not sure why 48
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <source src={src} type={type}/>
    </video>
  }
}

class File extends React.Component {

  state = {
    description: null,
    name: null,
    ext: null,
    mime: null,
    size: null
  }

  getMetaData(props) {

    const { file } = props

    if (this.state.size && file === this.props.file)
      return

    const url = `${HOST}/assets/file/${file}-meta`
    fetch(url)

    .then(res => {
      const type = res.headers.get('content-type')
      if (type && type.includes('application/json'))
        return res.json()
      else
        throw new Error('No JSON in response')
    })

    .then(data => {
      const json = JSON.parse(data)
      this.setState({ ...json })
    })

    .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getMetaData(this.props)
  }

  componentWillReceiveProps(props) {
    this.getMetaData(props)
  }

  render() {

    const { file } = this.props
    const { name, description, mime, ext } = this.state

    const url = `${HOST}/assets/file/${file}`
    const thumb = url + '-thumb'
    const download = url + '?download=' + name + ext

    const icon = do {

      const isVideo = mime && mime.includes('video')
      const isAudio = mime && mime.includes('audio')
      const isImage = mime && mime.includes('image')

      if (isVideo || isAudio)
        <Media poster={isAudio ? thumb : null} src={url} type={mime}/>

      else if (isImage)
        <a className='wip-icon-container' href={isImage ? url : download} target={isImage ? '_blank' : null}>
          <Image className='wip-image' thumb={false} imageId={file} style={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
          }}/>
        </a>

      else null
    }

    return <div className='wip-file'>
      {icon}
      <div className='wip-meta'>
        <span className='wip-title'>
          <a href={download} className='wip-download'/>

          <h2 className='wip-name'>{name}</h2>
          <h4 className='wip-ext'>{ext}</h4>
        </span>
        <Essay className='wip-description'>{description}</Essay>
      </div>
    </div>
  }

}

function FileList({files}) {
  return files

  ? <div className='padded'> {
    files.map(file => <File file={file}/>)
  } </div>

  : null
}

function LinkImage({id, back, className}) {
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
      { image ? <LinkImage id={image} back={back}/> : <Vimeo {...video}/>}
      { image ? null : <ProductTitle name={name} /> }
    </div>
  </div>
}
ProductFeature.contextTypes = {
  path: PropTypes.string.isRequired
}

function ProductBlockIcon({type}) {
  return type ? <div className={'product-block-icon ' + type}/> : null
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
    showcase: null,
    files: null,
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
        return this.setState({ showcase, products: [], files: null, items: [] })

      const scope = showcase.website.scope

      if (scope === 'work-in-progress') {

        const files = showcase.files

        this.setState({
          showcase,
          products,
          files
        })

      } else {

        products.then(prods => {

          let showIcons = false
          const products = prods.filter(prod => showcase.products && showcase.products.includes(prod._id))
          const items = []

          products.forEach(product => {
            if (product.productType === 'vimeo')
              items.push(product)
            else {
              showIcons = true
              items.push(...product.images)
            }
          })

          items.sort(randomly)

          this.setState({
            showcase,
            products,
            items,
            showIcons
          })

        })
      }
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
    const { products, items, showcase, files } = this.state

    delete other.path
    delete other.featuredShowcase
    delete other.onImageLoad

    const classes = classNames('showcase', className)

    const portrait = showcase &&
      showcase.portrait &&
      showcase.website &&
      showcase.website.showPortrait
      ? <Image className='showcase-portrait' imageId={showcase.portrait} />
      : null


    const essay = showcase && showcase.website && showcase.website.essay && showcase.website.showEssay
      ? <Essay className={classNames('showcase-essay', { 'showcase-essay-right' : portrait })}>{showcase.website.essay}</Essay>
      : null

    return <div className={classes} ref={ref => this.ref = ref}>

      { portrait || essay ? <div className='showcase-detail'>
        {portrait}
        {essay}
      </div> : null }

      <FileList files={files}/>
      <ProductFeature items={products} featured={featuredProduct} />
      <Grid items={items} component={ProductBlock} {...other} />

    </div>
  }

}
