import React from 'react'
import classNames from 'classnames'

export default function Background({dark}) {

  const classes = classNames({ dark })
  const poster = 'http://0.0.0.0:3030/background?poster=true'
  const src = 'http://0.0.0.0:3030/background'

  return <div>
    <div id='video-background-overlay' className={classes}/>
    <video id='video-background' className={classes} loop autoPlay muted poster={poster} >
      <source src={src} type='video/mp4' />
    </video>
  </div>
}
