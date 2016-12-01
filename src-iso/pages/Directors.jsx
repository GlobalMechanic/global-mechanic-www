import React from 'react'
import Page from './Page'
import { Dropdown, Collection, Showcase } from '../components'
import { Grid, Layout } from '../components/grid'
import Profile, { getFullName } from '../components/Profile'
import { urlify } from 'modules/helper'

function DirectorProfile(props) {
  return <Profile
    getImage={item => item.directorData.portrait || item.staffData.portrait}
    getWriteup={item => item.directorData.essay || item.staffData.essay}
    path='directors/'
    {...props}/>
}


function DirectorGrid({featured, documents}) {

  const layout = new Layout(50, false)

  return <Grid id='staff-wall' className='directors inverse' component={DirectorProfile} items={documents}
    getCellId={item => urlify(getFullName(item))} featured={featured}
    layout={layout} />

}

function DirectorList({documents, video, director}) {

  const directorDoc = director ? documents.filter(doc => urlify(getFullName(doc)) === director)[0] : null
  const showcase = directorDoc ? directorDoc.directorData.showcase : null

  return <div>
    <Dropdown title='Directors' items={documents.map(doc => getFullName(doc))}
      path='directors/' selected={director}/>
    <DirectorGrid featured={director} documents={documents}/>
    <Showcase id='director-wall' featuredShowcase={showcase} featuredProduct={video} autoBounds={false} path={`/directors/${director}/`}/>
  </div>
}

export default function Directors({children, ...other}) {

  const director = other.routeParams.director
  const video = other.routeParams.video

  return <Page id='directors-page' {...other}>
    <Collection director={director} video={video} component={DirectorList} service='people'
      filter={item => item.role === 'director'}/>

    {children}
  </Page>
}
