import React from 'react'
import Page from './Page'
import { Nut } from '../components'

export default function Home({children}) {
  return <Page id='home-page'>
    <h1 id='splash-title'>Global Mechanic</h1>
    {/* <Nut id='gear-background'/> */}
    {children}
  </Page>
}
