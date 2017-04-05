import React, { Component, PropTypes } from 'react'

/* global HOST */

export default class Image extends Component {

  static propTypes = {
    imageId: PropTypes.string,
    thumb: PropTypes.bool
  }

  static defaultProps = {
    thumb: true
  }

  state = {
    imageLoaded: false
  }

  setSrc = props => {

    const { imageId, thumb } = props

    if (!imageId)
      return

    this.setState({ imageLoaded: false})
    this.image = new window.Image()
    this.image.src = `${HOST}/assets/file/${imageId}${ thumb ? '-thumb' : ''}`
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

    const { style, imageId, thumb, children, ...other } = this.props

    const { imageLoaded } = this.state

    const imageStyle = {
      backgroundImage: imageLoaded ? `url(${HOST}/assets/file/${imageId}${ thumb ? '-thumb' : ''}` : null,
      opacity: imageLoaded ? 1 : 0,
      ...(style || {})
    }

    delete other.onImageLoad

    return <div style={imageStyle} {...other}>{children}</div>

  }

}
