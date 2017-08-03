import React, { Component } from 'react'
import Page from './Page'

import { People } from 'components'
import { navigate } from 'modules/helper'
import classNames from 'classnames'
import { SocialMedia } from '../components'

function aboutStaffSize(item) {
  return item.staffData.order <= 2
    ? { width: 6, height: 4}
    : { width: 4, height: 4}
}

function Email({address, children, small = false}) {
  return <a href={`mailto:${address}`} className='clickable'>
    { small ? <h4>{children}</h4> : <h2>{children}</h2> }
  </a>
}

function Writeup() {
  return <div id='about-writeup' className='padded transition-fade'>

    <h1>Global Mechanic is a design studio.</h1>

    <h1>We experiment, we create, we make beautiful things.</h1>

    <p>Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundreds of
    hours of award winning content for films, commercials, television series, digital
    media and art projects. Oscar and Emmy nominated, we're well decorated in festival
    and ad circuits worldwide.</p>

    <p>With a core staff of seasoned creatives and producers, we hub and spoke to
    handle projects small and large. That makes us nimble, adaptive, and it saves
    us from getting set in our ways. It's a studio culture of invention and collaboration,
    where change is expected. Welcome, even.</p>

    <p>It shows in our work. We love what we do, for big ad agencies and clients
    like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola, BMW, P&G, Nestle and Bell.
    For broadcasters like PBS, the Cartoon Network, Nickelodeon and CBC, the films
    we produce independently and in co-production with the National Film Board of
    Canada (NFB), our theatre and installation work and, of course, constant experimentation
    for the fun of it.</p>

  </div>
}

function KeyStaffButton({featured}) {
  const classes = classNames({
    clickable: featured
  })

  const click = featured ? () => navigate('/about') : null

  return <h1 id='key-staff-button' className={classes} onClick={click}>Key Staff</h1>
}

function StaffBlock({featured}) {
  return <div id='about-block' className='inverse padded transition-slide-down'>

    <KeyStaffButton featured={featured}/>

    <People featured={featured} path='/about' director={false} grayscale size={aboutStaffSize}/>

    <Email address={'liz@lizlainereps.com'}>USA | Liz Laine Reps +1 312 329 1111</Email>
    <Email address={'lisa@hestyreps.com'}>Canada | Hestyreps +1 416 482 0411</Email>
    <br/>

    <Email address={'tina@globalmechanic.com'} small>tina@globalmechanic.com</Email>

    <SocialMedia/>

  </div>
}

export default class About extends Component {

  state = {
    height: null
  }

  componentDidMount() {
    addEvent('resize', window, this.setBounds)
    this.setBounds()
  }

  setBounds = () => {

    if (!this.ref)
      return

    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    const bounds = this.ref.getBoundingClientRect()
    const height = innerHeight - (scroll + bounds.top)

    this.setState({ height })
  }

  render() {

    const { children, ...other } = this.props
    const { height } = this.state
    const { person } = this.props.params

    const style = height ? {
      minHeight: height
    } : null

    return <Page pageRef={ref => this.ref = ref} style={style} id='about-page' {...other}>

      <Writeup/>

      <StaffBlock featured={person}>{children}</StaffBlock>

    </Page>
  }
}
