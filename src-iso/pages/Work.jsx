import React from 'react'
import Page from './Page'
import { Dropdown, Collection, Showcase } from '../components'

function ShowcaseDropdown({documents, selected}) {

  const title = selected ? selected.replace(/_/g, ' ') : 'Work'

  return <Dropdown title={title} items={documents.map(doc => doc.name)}
   path='work/' selected={selected}/>
}

export default function Work({children, ...other}) {

  const showcase = other.routeParams.portfolio
  const video = other.routeParams.video
  const path = other.location.pathname

  return <Page id='work-page' {...other}>
    <Collection selected={showcase} component={ShowcaseDropdown} service='showcases'
      filter={item => item.website.scope === 'public'}/>
    <Showcase id='work-wall' featuredShowcase={showcase} featuredVideo={video} autoBounds={false} path={path} />
    {children}
  </Page>
}
