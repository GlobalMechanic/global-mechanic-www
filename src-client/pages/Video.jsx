import React from 'react'
import { browserHistory } from 'react-router'
import { events, data } from '../modules/data-loader'

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
    if (data.videos)
      this.setVideos(data.videos)
  }

  componentWillUnmount() {
    events.removeListener('videos-loaded', this.setVideos)
  }

  render() {
    const video = this.state.video

    return video ? <div className="video-page clickable" onClick={goBack} >
      <iframe className="video-player" src={`//player.vimeo.com/video/${this.props.params.video}`}
        frameBorder={false} title={false} badge={false} byline={false}
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen />
    </div> : null
  }
}
