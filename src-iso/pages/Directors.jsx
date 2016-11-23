import React from 'react'
import Page from './Page'
import { Dropdown } from '../components'

export default function Work({children, ...other}) {
  return <Page id='directors-page' {...other}>
    <Dropdown title='directors' />
    {children}
  </Page>
}
