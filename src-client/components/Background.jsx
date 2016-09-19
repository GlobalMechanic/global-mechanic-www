import React from 'react'
import justClicks from '../assets/just-clicks-web.mp4'
import justClicksPoster from '../assets/just-clicks-web.jpg'
import { events } from '../modules/data-loader'

export default class Background extends React.Component {

  constructor(props) {
    super(props)
    this.state = { classes: '' }
    this.onBackgroundChange = this.onBackgroundChange.bind(this)
  }

  onBackgroundChange(type) {
    this.setState({classes: type})    
  }

  componentDidMount() {
    events.on('background-change', this.onBackgroundChange)
  }

  componentWillUnmount() {
    events.removeEventListener('background-change', this.onBackgroundChange)
  }

  render() {
    const classes = this.state.classes

    return <div>
      <div id='video-background-overlay' className={classes}/>
      <video id='video-background' className={classes} loop autoPlay muted poster={justClicksPoster} >
        <source src={justClicks} type='video/mp4'/>
      </video>
    </div>
  }
}
