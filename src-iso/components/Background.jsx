import React from 'react'
import classNames from 'classnames'

//Because ServerSide rendering isn't done with webpack, and therefore can't
//require .jpg or .mp4 files
const isBrowser = typeof window !== 'undefined'

const poster = isBrowser ? require('../assets/background-poster.jpg') : ''
const video = isBrowser ? require('../assets/background-video.mp4') : ''

export default function Background({ darken, inverse }) {

  const opacity = darken || 0
  const blur = opacity * 20

  const classes = classNames({ inverse })

  const overlayStyle = {
    backgroundColor: inverse ? null : `rgba(0,0,0,${opacity})`
  }

  const bgStyle = {
    WebkitFilter: opacity > 0 && opacity < 1 && !inverse ? `blur(${blur}px)` : null
  }

  return <div>
    <div id='video-background-overlay' className={classes} style={overlayStyle}/>
    <video id='video-background' loop autoPlay muted poster={poster}
      className={classes}  style={bgStyle} >
      <source src={video} type='video/mp4' />
    </video>
  </div>
}
