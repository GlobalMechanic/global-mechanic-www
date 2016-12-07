import React from 'react'
import Page from './Page'
import { Link } from 'react-router'

const PLAY_PTS = ['472.8','273 0','546 0','0']

function PlayButton() {
  return <svg id='just-clicks-button' viewBox='0 0 472.8 546'>
    <polygon points={PLAY_PTS}/>
  </svg>
}

function JustClicks() {
  return <div id='just-clicks-link' className='transition-slide-down'>
    <Link to='/video/just_clicks' className='clickable link'>
      <PlayButton/>
      <h2>Just Clicks</h2>
    </Link>
  </div>
}

export default function Home({children, ...other}) {

  return <Page id='home-page' {...other}>

    <h1 id='splash-title' className='transition-pop'>Global Mechanic</h1>

    <JustClicks/>

    {children}

  </Page>
}
