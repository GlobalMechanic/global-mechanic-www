import React from 'react'
import Page from './Page'
import { Dropdown } from '../components'

const DUMMY_LIST = [
  'line drawing',
  'mixed media',
  'stop motion',
  'series',
  'cartoon style',
  'live action & animation',
  'character',
  'fine art - painterly',
  'type',
  'films',
  'infographics',
  'featured work'
]

export default function Work({children, ...other}) {
  return <Page id='work-page' {...other}>
    <Dropdown title='character' items={DUMMY_LIST} />
    {children}
  </Page>
}
