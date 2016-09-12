import React from 'react'
import { browserHistory } from 'react-router'
import Page from './Page'
import staff from '../modules/staff'
import { TitleText, BodyText, Inverted, FreeWall } from '../components'

import randomColor from 'random-color'

const rHex = () => randomColor().hexString()
//
// function rInt(lo=50, high=250) {
//   const range = Math.random() * (high - lo)
//   return Math.round(range + lo)
// }

const FeaturedWidth = 800
const FeaturedHeight = 960

function StaffMember({path, name, image, width, height, writeup, current}) {

  const featured = path === current

  const click = () => {
    if (!featured)
      browserHistory.push(`/about/${path}`)
  }

  return <div
    onClick={click}
    key={name} className='block'
    style={{
      backgroundColor: rHex(),
      width: featured ? FeaturedWidth : width,
      height: featured ? FeaturedHeight : height
    }}>
    {
      featured ? <p className="body"><h3>{name}</h3>{writeup}</p> : null
    }
    <div className={`staff-picture${featured ? ' featured' : ''}`} style={{backgroundImage: `url(${image})`}}/>
  </div>
}

function TeamFreewall({current}) {
  return <FreeWall id="free-wall" selector=".block" targetHeight={500}>
    { staff.map(data => <StaffMember key={data.path} {...data} current={current}/>) }
  </FreeWall>
}

function OurTeam({current}) {
  return <Inverted id="our-team-section" fill>
    <TitleText className="clickable" >Our Team</TitleText>
    <TeamFreewall current={current}/>
    <br/>
    <TitleText mini>Suite 208 - 1525 West 8th Avenue</TitleText>
    <TitleText mini>Vancouver BC</TitleText>
    <TitleText mini>Canada V6J 1T5</TitleText>
    <TitleText mini>+1 (604) 733 7475</TitleText>
    <TitleText mini>studio@globalmechanic.com</TitleText>
    <br/>
    <TitleText mini>Liz Laine Reps | USA +1 (312) 329 1111</TitleText>
    <TitleText mini>Hestyreps | Canada +1 (416) 482 0411</TitleText>
  </Inverted>
}

export default function About({params}) {
  const current = params.staff
  return <Page id="about-page">
    <TitleText>Global Mechanic is a design studio.</TitleText>
    <TitleText>We experiment, we create, we make beautiful things to affect how people think and see the world.</TitleText>
    <BodyText>Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films,
      commercials, telvision series, digital media and art projects. Oscar and Emmy nominated, we're well decorated in festival and
    ad circuits worldwide.</BodyText>
    <BodyText>With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us
      nible, adaptive, and it saves us from getting set in our ways. It's a studio culture of invention and collboration, where change is
    expected. Welcome, even.</BodyText>
    <BodyText>It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola,
      BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodean and CBC, the films we produce independently and in
    co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.</BodyText>
    <br/>
    <br/>
    <br/>
    <OurTeam current={current} />
  </Page>
}
