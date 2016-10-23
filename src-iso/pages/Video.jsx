import React from 'react'
import { browserHistory } from 'react-router'
import { events, data } from 'modules/data-loader'

function goBack() {
  browserHistory.goBack()
}

export default class Video extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      video: null,
    }
    this.setVideos = this.setVideos.bind(this)
    this.resize = this.resize.bind(this)
    this.$player = null
  }

  resize() {
    if (!this.$player || this.$player.length === 0)
      return

    const y = Math.max((window.innerHeight - this.$player.height()) * 0.5, 0)
    this.$player.css('paddingTop', y)
  }

  setVideos(allVideos) {
    const id = this.props.params.video
    let video = null

    for (const i in allVideos) {
      const otherVideo = allVideos[i]
      if (otherVideo.id === id) {
        video = otherVideo
        break
      }
    }

    this.setState({ video })
  }

  componentDidMount() {
    events.on('videos-loaded', this.setVideos)
    $(window).on('resize', this.resize)

    if (data.videos)
      this.setVideos(data.videos)
  }

  componentWillUnmount() {
    events.removeListener('videos-loaded', this.setVideos)
    $(window).off('resize', this.resize)
  }

  componentDidUpdate() {
    this.resize()
  }

  render() {
    const video = this.state.video
    let id = this.props.params.video

    if (id.includes(':'))
      id = id.split(':')[0]

    return video ? <div className="video-page clickable" onClick={goBack}>

      <iframe className="video-player" src={`//player.vimeo.com/video/${id}`}
        frameBorder={false} title={false} badge={false} byline={false}
        ref={player => this.$player = $(player)}
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen />
    </div> : null
  }
}
