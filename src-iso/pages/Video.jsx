import React from 'react'
import Page from './Page'

import { urlify } from 'modules/helper'
import { products } from 'modules/data'
import { Vimeo, ProductTitle } from 'components/Showcase'

export default class Video extends React.Component {

  state = {
    videos: []
  }

  componentDidMount() {
    products.then(ps => {
      const videos = ps.filter(p => p && p.video && p.video.vimeoId)
      this.setState({videos})
    })
  }

  render() {
    const { children, ...other } = this.props
    const { videos } = this.state
    const { video } = other.params

    const videoDoc = videos.filter(v => urlify(v.name) === video || v._id === video)[0]


    const vimeoId = videoDoc && videoDoc.video ? videoDoc.video.vimeoId : null
    const name = videoDoc ? videoDoc.name : null

    return <Page id='video-page' {...other}>

      <div id='video' className='transition-slide-up'>
        <Vimeo vimeoId={vimeoId} />
        <ProductTitle name={name} />
      </div>

      {children}

    </Page>
  }


}
