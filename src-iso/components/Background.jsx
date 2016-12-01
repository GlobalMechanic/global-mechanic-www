import React from 'react'
import classNames from 'classnames'

//Because ServerSide rendering isn't done with webpack, and therefore can't
//require .jpg or .mp4 files
const isBrowser = typeof window !== 'undefined'

const poster = isBrowser ? require('../assets/background-poster.jpg') : ''
const video = isBrowser ? require('../assets/background-video.mp4') : ''

export default function Background({dark}) {

  const classes = classNames({ dark })

  return <div>
    <div id='video-background-overlay' className={classes}/>
    <video id='video-background' className={classes} loop autoPlay muted poster={poster} >
      <source src={video} type='video/mp4' />
    </video>
  </div>
}
