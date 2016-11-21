import React from 'react'
import classNames from 'classnames'

export default function Background({poster, video, type, dark}) {

  const classes = classNames({ dark })

  return <div>
    <div id='video-background-overlay' className={classes}/>
    <video id='video-background' className={classes} poster={poster} loop autoPlayer muted >
      <source src={video} type={type || 'video/mp4'} />
    </video>
  </div>
}
