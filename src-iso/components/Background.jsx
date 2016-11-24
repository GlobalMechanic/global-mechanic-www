import React from 'react'
import classNames from 'classnames'

/* global HOST */

export default function Background({dark}) {

  const classes = classNames({ dark })
  const poster = HOST + '/assets/background?poster=true'
  const src = HOST + '/assets/background'

  return <div>
    <div id='video-background-overlay' className={classes}/>
    <video id='video-background' className={classes} loop autoPlay muted poster={poster} >
      <source src={src} type='video/mp4' />
    </video>
  </div>
}
