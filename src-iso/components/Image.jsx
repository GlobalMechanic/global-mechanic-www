import React, { Component, PropTypes } from 'react'

/* global HOST */

export default class Image extends Component {

  static propTypes = {
    imageId: PropTypes.string
  }

  state = {
    imageLoaded: false
  }

  setSrc = props => {

    const { imageId } = props

    if (!imageId)
      return

    this.setState({ imageLoaded: false})
    this.image = new window.Image()
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

    const { style, imageId, children, ...other } = this.props

    const { imageLoaded } = this.state

    const imageStyle = {
      backgroundImage: imageLoaded ? `url(${HOST}/assets/file/${imageId}-thumb)` : null,
      opacity: imageLoaded ? 1 : 0,
      ...(style || {})
    }

    delete other.onImageLoad

    return <div style={imageStyle} {...other}>{children}</div>

  }

}
