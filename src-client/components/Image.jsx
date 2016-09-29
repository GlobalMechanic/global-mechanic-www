import React from 'react'

export class Image extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      video: null,
    }
    this.resize = this.resize.bind(this)
    this.$holder = null
  }

  resize() {
    if (!this.$holder || this.$holder.length === 0)
      return

    const y = Math.max((window.innerHeight - this.$holder.height()) * 0.5, 0)
    this.$holder.css('paddingTop', y)
  }

  componentDidMount() {
    $(window).on('resize', this.resize)
    setTimeout(this.resize, 10)
  }

  componentWillUnmount() {
    $(window).off('resize', this.resize)
  }

  componentDidUpdate() {
    setTimeout(this.resize, 10)
  }

  render() {
    const { close, url } = this.props
    return <div className="video-page clickable" onClick={close}>
      <img className="hack-image-viewer" src={url} ref={holder => this.$holder = $(holder)}/>
    </div>
  }
}
