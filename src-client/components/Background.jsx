import React from 'react'
import justClicks from '../assets/just-clicks-web.mp4'
import justClicksPoster from '../assets/just-clicks-web.jpg'

export default function Background() {
  return <div>
    <div className='video-background-overlay'/>
    <video className='video-background' loop autoPlay muted poster={justClicksPoster} >
      <source src={justClicks} type='video/mp4'/>
    </video>
  </div>
}
