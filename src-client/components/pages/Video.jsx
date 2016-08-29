import React from 'react'
import HeaderText from '../HeaderText'
import BodyText from '../BodyText'
import { Grid, Row, Col, ResponsiveEmbed } from 'react-bootstrap'
import { data, events } from '../../modules/data-loader'


function VimeoPlayer(props) {

  const video = props.video
  const src=`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0`

  const description = video.description ? video.description.split('/n') : []

  return <Grid fluid>
    <HeaderText>{video.name}</HeaderText>
    <Row style={{paddingTop: '5vw'}}>
      <Col xsHidden sm={1} md={2}/>
      <Col xs={12} sm={10} md={8}>
        <ResponsiveEmbed a16by9>
          <iframe src={src} frameborder="0" width={video.width} height={video.height} title={video.name} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </ResponsiveEmbed>
      </Col>
      <Col xsHidden sm={1} md={2}/>
    </Row>
    { description.map( (line,i) => <BodyText key={i}>{line}</BodyText>)}
  </Grid>
}

export default class Video extends React.Component {

  constructor(props) {
    super(props)
    this.state = { videos: {} }
    this.navigate = this.navigate.bind(this)
  }

  componentDidMount() {
    if (data.videos)
      this.setState({videos: data.videos})
    else
      events.once('videos-loaded', videos => this.setState({videos}))
  }

  navigate(url) {
    this.props.history.push(url)
  }

  render() {

    const video = this.state.videos[this.props.params.video]

    console.log(video)

    return video ? <VimeoPlayer video={video}/> : null
  }
}
