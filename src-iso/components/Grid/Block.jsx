import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

/* global HOST */



export default class Block extends Component {

  static propTypes = {
    imageId: PropTypes.string
  }

  state = {
    imageLoaded: false
  }

  setSrc = props => {

    const { imageId } = props

    this.setState({ imageLoaded: false})
    this.image = new Image()
    this.image.src = `${HOST}/assets/file/${imageId}-thumb`
    this.image.onload = this.imageLoad

  }

  imageLoad = () => {
    const { onImageLoad } = this.props
    if (onImageLoad)
      onImageLoad(this.image)
    this.setState({imageLoaded: true})
  }

  componentDidMount() {
    this.setSrc(this.props)
  }

  componentWillReceiveProps(props) {
    if (props.imageId !== this.props.imageId)
      this.setSrc(this.props)
  }

  render() {

    const { style, imageId, grayscale, className, onClick, children, ...other } = this.props

    const { imageLoaded } = this.state

    const blockClasses = classNames('block', className)
    const imageClasses = classNames('block-image', { clickable: onClick, grayscale})

    const imageStyle = {
      backgroundImage: imageLoaded ? `url(${HOST}/assets/file/${imageId}-thumb)` : null,
      opacity: imageLoaded ? 1 : 0
    }

    delete other.onImageLoad

    return <div className={blockClasses} style={style} {...other}>
      <div style={imageStyle} className={imageClasses} onClick={onClick}>{children}</div>
    </div>

  }

}
