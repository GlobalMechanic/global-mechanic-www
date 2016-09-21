import React from 'react'
import { FreeWall } from './index'
import { browserHistory } from 'react-router'
import { events, data } from '../modules/data-loader'

function navigate(url) {
  browserHistory.push(url)
}

function VideoBlock({ video, urlPrefix }) {

  urlPrefix = urlPrefix || '/'
  const thumb_index = Math.floor(video.urls.thumb.length * 0.5)
  const thumb_url = video.urls.thumb[thumb_index]
  const video_url = urlPrefix + video.id

  const { width, height } = video
  
  return <div
    className='video-block clickable bulge'
    onClick={() => navigate(video_url)}
    style={{
      width,
      height,
      backgroundImage: `url(${thumb_url})`
    }}>
  </div>
}

export default class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = { videos: [] }
    this.setVideos = this.setVideos.bind(this)
  }

  setVideos(allVideos) {
    const id = this.props.portfolio.toString()
    const videos = []

    for (const i in allVideos) {
      const video = allVideos[i]
      if (video.portfolios.includes(id))
        videos.push(video)
    }

    this.setState({ videos })
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
    const { id, urlPrefix } = this.props
    const { videos } = this.state
    return <FreeWall id={id} selector=".video-block" >
      { videos.map(video => <VideoBlock key={video.id} video={video} urlPrefix={urlPrefix} />) }
    </FreeWall>
  }
}
