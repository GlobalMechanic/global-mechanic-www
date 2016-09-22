import React from 'react'
import Page from './Page'
import { TitleText, BodyText, Inverted, Content, FreeWall } from '../components'
import staff from '../modules/staff'
import { browserHistory, Link } from 'react-router'

function StaffBlock({ id, image, width, height }) {

  const click = () => {
    browserHistory.push(`/about/${id}`)
  }

  return <div
    onClick={click}
    key={name} className='staff-block bulge'
    style={{
      width,
      height
    }}>
    <div className="staff-picture" style={{backgroundImage: `url(${image})`}}/>
  </div>

}

export default function About(props) {

  const onStaffMember = props.params.staff

  return <Page id='about-page' {...props}>
    <br/>
    <Content id='about-page-content'>
      <TitleText className="padded">Global Mechanic is a design studio.</TitleText>
      <TitleText className="padded">We experiment, we create, we make beautiful things.</TitleText>
      <BodyText className="padded">Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films,
        commercials, telvision series, digital media and art projects. Oscar and Emmy nominated, we're well decorated in festival and
      ad circuits worldwide.</BodyText>
      <BodyText className="padded">With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us
        nible, adaptive, and it saves us from getting set in our ways. It's a studio culture of invention and collboration, where change is
      expected. Welcome, even.</BodyText>
      <BodyText className="padded">It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola,
        BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodean and CBC, the films we produce independently and in
      co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.</BodyText>
    </Content>

    <Inverted id='our-team-section' fill className='padded-bottom'>
      <br/>
      { onStaffMember
        ? <Link to='/about'><TitleText className='clickable padded'>HONORABLE STAFF</TitleText></Link>
        : <TitleText className='padded'>HONORABLE STAFF</TitleText>
      }
      <br/>
      { props.params.staff ?
        props.children
          : <FreeWall id="chief-free-wall"  selector=".staff-block">
            { staff
              .map(dir => <StaffBlock key={dir.id} {...dir}/>) }
          </FreeWall> }
      <br/>
      <TitleText className='padded small'>Liz Laine Reps | USA +1 (312) 329 1111</TitleText>
      <TitleText className='padded small'>Hestyreps | Canada +1 (416) 482 0411</TitleText>
      <br/>
      <TitleText className='padded' mini>Suite 208 - 1525 West 8th Avenue</TitleText>
      <TitleText className='padded' mini>Vancouver BC</TitleText>
      <TitleText className='padded' mini>Canada V6J 1T5</TitleText>
      <TitleText className='padded' mini>+1 (604) 733 7475</TitleText>
      <TitleText className='padded' mini>studio@globalmechanic.com</TitleText>

    </Inverted>
  </Page>
}
