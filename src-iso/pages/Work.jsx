import React from 'react'
import Page from './Page'

export default function Work({children}) {
  return <Page id='work-page'>
    <h1>Work</h1>
    {children}
  </Page>
}
