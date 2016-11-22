import React from 'react'
import Page from './Page'

export default function Work({children}) {
  return <Page id='directors-page'>
    <h1>Directors</h1>
    {children}
  </Page>
}
