import React from 'react'
import justClicks from '../assets/just-clicks-web.mp4'
import justClicksPoster from '../assets/just-clicks-web.jpg'

export default function Background(props) {
  const classes = props.dark ? 'dark' : ''
  return <div>
    <div id='video-background-overlay' className={classes}/>
    <video id='video-background' className={classes} loop autoPlay muted poster={justClicksPoster} >
      <source src={justClicks} type='video/mp4'/>
    </video>
  </div>
}
