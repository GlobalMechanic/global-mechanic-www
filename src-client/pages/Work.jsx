import React from 'react'
import Page from './Page'
import { Dropdown } from '../components'

//bring the old dropdown back

export default function Work(props) {
  return <Page id="work-page" {...props}>
    <Dropdown className="padded">portfolio</Dropdown>
  </Page>
}
