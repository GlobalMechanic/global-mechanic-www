import React from 'react'
import { Grid } from 'react-bootstrap'
import HeaderLine from '../HeaderLine'
import BodyLine from '../BodyLine'

export default function About() {
  return <Grid fluid>
    <HeaderLine>Global Mechanic is a design studio.</HeaderLine>
    <HeaderLine>We experiment, we create, we make beautiful things to affect how people think and see the world.</HeaderLine>
    <BodyLine>Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films,
      commercials, telvision series, digital media and art projects. Oscar and Emmy nominated, we're well decorated in festival and
    ad circuits worldwide.</BodyLine>
    <BodyLine>With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us
      nible, adaptive, and it saves us from getting set in our ways. It's a studio culture of invention and collboration, where change is
    expected. Welcome, even.</BodyLine>
    <BodyLine>It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola,
      BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodean and CBC, the films we produce independently and in
    co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.</BodyLine>
  </Grid>
}
