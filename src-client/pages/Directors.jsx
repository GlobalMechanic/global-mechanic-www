import React from 'react'
import { browserHistory } from 'react-router'
import Page from './Page'
import staff from '../modules/staff'
import { FreeWall, Content, Dropdown } from '../components'

import randomColor from 'random-color'

const rHex = () => randomColor().hexString()

const FeaturedWidth = 800
const FeaturedHeight = 960

function Director({ path, name, image, width, height, writeup, current }) {

  const featured = path === current
  const click = () => {
    if (!featured)
      browserHistory.push(`/about/${path}`)
  }

  return <div
    onClick={click}
    key={name} className='block'
    style={{
      backgroundColor: rHex(),
      width: featured ? FeaturedWidth : width,
      height: featured ? FeaturedHeight : height
    }}>
    {
      featured ? <p className="body"><h3>{name}</h3>{writeup}</p> : null
    }
    <div className={`staff-picture${featured ? ' featured' : ''}`} style={{backgroundImage: `url(${image})`}}/>
  </div>

}

function Directors({ current }) {
  return <FreeWall id="director-free-wall" selector=".block" className="med-width center">
    {
      staff
      .filter(data => data.director)
        .map(data => <Director key={data.path} {...data} current={current}/>)
    }
  </FreeWall>
}

export default function About(props) {
  return <Page id="directors-page" {...props}>
    <Content id="directors-content" >
      <Dropdown className="padded"/>
      <Directors />
    </Content>
  </Page>
}
