import React from 'react'
import Page from './Page'
import { Link } from 'react-router'

function Play() {
  return <span className='play-button'/>
}

export default function Splash(props) {
  return <Page id='splash-page' className='' {...props}>
    <h1>Global Mechanic</h1>
    <div id='gear-background'/>
    <Link id='just_clicks_button' className='title mini clickable' to='/work/just_clicks/86731887'><Play/> Just Click</Link>
  </Page>
}
