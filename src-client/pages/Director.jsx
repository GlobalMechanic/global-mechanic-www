import React from 'react'
import Page from './Page'
import directors from '../modules/directors'

import { StaffPicture, Portfolio } from '../components'

export default function Director(props) {
  const id = props.params.director
  const { children, ...other } = props
  const director = directors.filter(dir => dir.id === id)[0]

  return <Page id={id} className="inverse" {...other}>
    <StaffPicture staff={director}></StaffPicture>
    <Portfolio id='directors-portfolio' key={director.id} portfolio={director.portfolio}
      portfolioImagesHack={director.portfolioImagesHack}
      urlPrefix={`/directors/${director.id}/`} />
    { children }
  </Page>
}
