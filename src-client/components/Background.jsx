import React from 'react'
import justClicks from '../assets/just-clicks-web.mp4'
import justClicksPoster from '../assets/just-clicks-web.jpg'
import { events } from '../modules/data-loader'

export default class Background extends React.Component {

  constructor(props) {
    super(props)
    this.state = { classes: '' }
    this.backgroundStyleChange = this.backgroundStyleChange.bind(this)
  }

  backgroundStyleChange(data) {
    let classes = ''

    for (const key in data)
      if(data[key] === true)
        classes += classes === '' ? key : ` ${key}`
    this.setState({ classes })

  }

  componentDidMount() {
    events.on('background-style', this.backgroundStyleChange)
  }

  componentWillUnmount() {
    events.removeEventListener('background-style', this.backgroundStyleChange)
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
