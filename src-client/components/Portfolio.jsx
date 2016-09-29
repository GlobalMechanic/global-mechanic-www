import React from 'react'
import { FreeWall } from './index'
import { browserHistory } from 'react-router'
import { events, data } from '../modules/data-loader'
import { Image } from './Image'

function navigate(url) {
  browserHistory.push(url)
}

function ImageBlock({ width, height, url, onClick }) {
  return <div
    className='video-block clickable bulge'
    onClick={onClick}
    style={{
      width: width || 160,
      height: height || 160,
      backgroundImage: `url(${url})`
    }}>
  </div>
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
    this.state = {
      videos: [],
      image: null
    }
    this.setVideos = this.setVideos.bind(this)
    this.setImage = this.setImage.bind(this)
    this.clearImage = this.clearImage.bind(this)
  }

  setImage(image) {
    this.setState({image})
  }

  clearImage() {
    this.setState({image: null})
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
    const { id, urlPrefix, portfolioImagesHack, ...other } = this.props
    const { videos, image } = this.state

    const imageBlocks = (portfolioImagesHack || []).map(img => <ImageBlock key={img.url} onClick={() => this.setImage(img)} {...img}/>)
    const videoBlocks = videos.map(video => <VideoBlock key={video.id} video={video} urlPrefix={urlPrefix} />)

    const blocks = videoBlocks.concat(imageBlocks)

    return <div>
      { image ? <Image {...image} close={this.clearImage}/> : null }
      <FreeWall id={id} key={id} selector=".video-block" {...other}>
        { blocks }
      </FreeWall>
    </div>
  }
}
