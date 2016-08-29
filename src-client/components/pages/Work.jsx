import React from 'react'
// import randomColor from 'random-color'

import { DropdownButton, MenuItem, Grid } from 'react-bootstrap'
import FreeWall from '../FreeWall'
import { data, events } from '../../modules/data-loader'

/******************************************************************************/
// Helpers
/******************************************************************************/
//
// function rHex () {
//   return randomColor().hexString()
// }
//
// function rInt(lo=50, high=250) {
//   const range = Math.random() * (high - lo)
//   return Math.round(range + lo)
// }

function uglyName(name) {
  return name.toLowerCase().replace(/ /g, '_')
}

function prettyName(name) {
  return name.toUpperCase().replace(/_/g, ' ')
}

function findCurrentPortfolio(name, portfolios) {
  for (const i in portfolios) {
    const portfolio = portfolios[i]
    if (uglyName(portfolio.name) === name)
      return portfolio
  }

  return null
}

function portfoliosAsLinks(portfolios, navigate) {
  const links = []

  for (const i in portfolios) {
    const portfolio = portfolios[i]

    if (portfolio.scope !== 'public')
      continue

    const key = uglyName(portfolio.name)
    const url = `/work/${key}`

    links.push(<MenuItem key={portfolio.id} onClick={() => navigate(url)}>{portfolio.name}</MenuItem>)
  }

  return links
}

function videosAsBlocks(videos, portfolio, navigate) {
  const blocks = []

  if (portfolio)
    for (const i in videos) {
      const video = videos[i]
      if (video.portfolios.some(pid => pid === portfolio.id))
        blocks.push(<VideoBlock key={video.id} video={video} navigate={navigate}/>)
    }

  return blocks
}

/******************************************************************************/
// SubComponents
/******************************************************************************/

function VideoBlock(props) {
  const video = props.video
  const thumb_index = Math.floor(video.urls.thumb.length * 0.5)
  const thumb_url = video.urls.thumb[thumb_index]
  const video_url = `/videos/${video.id}`
  const match = thumb_url.match(/(\d+)x(\d+)/)

  let { width, height } = match ? { width: parseInt(match[1]), height: parseInt(match[2])} : video

  width = Math.min(width, 240 * 1.2)
  height = Math.min(height, 135 * 1.2)

  return <div
    className='freewall-block'
    onClick={()=> props.navigate(video_url)}
    style={{
      width: width,
      height: height,
      backgroundImage: `url(${thumb_url})`
    }}>
    <div className='video-block'>
    </div>
  </div>
}

/******************************************************************************/
// Class
/******************************************************************************/

export default class Work extends React.Component {

  constructor(props) {
    super(props)
    this.state = { portfolios: {}, videos: {} }
    this.navigate = this.navigate.bind(this)
  }

  componentDidMount() {
    if (data.portfolios)
      this.setState({portfolios: data.portfolios})
    else
      events.once('portfolios-loaded', portfolios => this.setState({portfolios}))

    if (data.videos)
      this.setState({videos: data.videos})
    else
      events.once('videos-loaded', videos => this.setState({videos}))
  }

  navigate(url) {
    this.props.history.push(url)
  }

  render() {

    const videos = this.state.videos
    const portfolios = this.state.portfolios
    const currentPortfolio = findCurrentPortfolio(this.props.params.portfolio, portfolios)

    return <div>
      <div id='work-header'>
        <DropdownButton title={currentPortfolio ? prettyName(currentPortfolio.name) : 'Select'} id='work-dropdown'>
          { portfoliosAsLinks(portfolios, this.navigate) }
        </DropdownButton>
      </div>

      <Grid fluid style={{ marginTop:'25px' }}>
        <FreeWall id='work-freewall' selector=".freewall-block" targetHeight={500}>
          { videosAsBlocks(videos, currentPortfolio, this.navigate) }
        </FreeWall>
      </Grid>
    </div>
  }
}
