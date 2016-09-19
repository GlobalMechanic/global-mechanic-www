import React from 'react'
import Page from './Page'
import { TitleText, BodyText, Inverted, Content, Footer } from '../components'

export default function About(props) {

  return <Page id='about-page' {...props}>
    <Content id='about-page-content'>
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
    </Content>

    <Footer content='about-page-content' className="fill">
      <Inverted id='our-team-section' fill className='padded-bottom'>
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
    </Footer>
  </Page>
}
