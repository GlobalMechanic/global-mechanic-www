import React from 'react'
import justClicks from '../assets/just-clicks-web.mp4'
import justClicksPoster from '../assets/just-clicks-web.jpg'

export default class Background extends React.Component {

  render() {
    return  <video className='video-background-container' loop autoPlay muted poster={justClicksPoster} >
        <source src={justClicks} type='video/mp4'/>
      </video>
  }

}
