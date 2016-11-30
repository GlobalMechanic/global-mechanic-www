import React from 'react'
import Page from './Page'
import { Dropdown, Collection } from '../components'
import Profile, { getFullName } from '../components/Profile'


function DirectorList({documents, selected}) {

  return <Dropdown title='Directors' items={documents.map(doc => getFullName(doc))}
    path='directors/' selected={selected}/>
}

export default function Directors({children, ...other}) {

  const selected = other.routeParams.portfolio

  return <Page id='directors-page' {...other}>
    <Collection selected={selected} component={DirectorList} service='people'
      filter={item => item.role === 'director'}/>

    {children}
  </Page>
}
