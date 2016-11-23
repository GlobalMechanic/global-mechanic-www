import React from 'react'
import Page from './Page'

export default function Home({children, ...other}) {

  return <Page id='home-page' {...other}>
    <h1 id='splash-title'>Global Mechanic</h1>
    {children}
  </Page>
}
