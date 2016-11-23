import React, { Component } from 'react'
import Page from './Page'
import { Freewall } from '../components'

const { random, round, min } = Math

const c = () => round(random() * 255)
const d = () => round(100 + random() * 300)

function Staff() {
  //
  // const blocks = []
  // for (let i = 0; i < 25; i++) {
  //   const width = d()
  //   const height = min(d(), width)
  //   const backgroundColor = `rgb(${[c(), c(), c()]})`
  //   blocks.push({
  //     width,
  //     height,
  //     backgroundColor
  //   })
  // }
  //
  // return <Freewall>{
  //   blocks.map(block => <div style={{...block}} />)
  // }</Freewall>
  return null

}

function Writeup() {
  return <div id='about-writeup' className='padded'>

    <h1>Global Mechanic is a design studio.</h1>
    <h1>We experiment, we create, we make beautiful things.</h1>

    <p>Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of
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
    <div className='about-writeup-push'/>

  </div>
}

function Block({children}) {
  return <div id='about-block' className='inverse padded'>

    <h1>Key Staff</h1>
    <br/>

    {children ? children : <Staff/> }

    <h2>USA | Liz Laine Reps +1 312 329 1111</h2>
    <h2>Canada | Hestyreps +1 416 482 0411</h2>
    <br/>

    <h4>Suite 208 - 1525 West 8th Avenue</h4>
    <h4>Vancouver BC</h4>
    <h4>Canada V6J 1T5</h4>
    <h4>+1 604 733 7475</h4>
    <h4>studio@globalmechanic.com</h4>

    <a id='twitter' href='https://www.twitter.com'/>
    <a id='facebook' href='https://www.facebook.com'/>

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

  componentWillReceiveProps() {
    this.setBounds()
  }

  setBounds = () => {

    if (!this.ref)
      return

    const bounds = this.ref.getBoundingClientRect()
    const height = innerHeight - bounds.top

    this.setState({ height })
  }

  render() {

    const { children, ...other } = this.props
    const { height } = this.state

    const style = height ? {
      minHeight: height
    } : null

    return <Page pageRef={ref => this.ref = ref} style={style} id='about-page' {...other}>

      <Writeup/>

      <Block>{children}</Block>

    </Page>
  }
}
