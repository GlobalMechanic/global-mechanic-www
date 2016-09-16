import React from 'react'
import { browserHistory } from 'react-router'
import Page from './Page'
import staff from '../modules/staff'
import { TitleText, BodyText, Inverted, FreeWall, Content } from '../components'

import randomColor from 'random-color'

const rHex = () => randomColor().hexString()
//
// function rInt(lo=50, high=250) {
//   const range = Math.random() * (high - lo)
//   return Math.round(range + lo)
// }

const FeaturedWidth = 800
const FeaturedHeight = 960

function Director({path, name, image, width, height, writeup, current}) {

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

function Directors({current}) {
  console.log(staff)
  return <FreeWall id="director-free-wall" selector=".block" className="med-width center">
    {
      staff
      .filter(data => data.director)
        .map(data => <Director key={data.path} {...data} current={current}/>)
    }
  </FreeWall>
}

export default function About() {
  return <Page id="directors-page" >
    <Content id="directors-content" >
      <TitleText>Global Mechanic works with a number of outside directors.</TitleText>
      <TitleText>They are all incredibly awesome.</TitleText>
      <br/>
      <BodyText>Maecenas sed mauris turpis. Ut vulputate tellus eu tortor cursus porttitor. In imperdiet
        consequat massa non lobortis. Aenean eget risus erat. Aenean tellus mauris, posuere sed dignissim sed,
        tincidunt non nulla. Nam aliquam, sem a condimentum rutrum, nisi lorem volutpat massa, vel interdum
      turpis velit et neque. Aliquam erat volutpat.</BodyText>
      <BodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit lacus, tristique nec felis vel,
        hendrerit auctor erat. Pellentesque luctus neque id auctor convallis. Donec porttitor ante id nulla luctus,
        ac rutrum erat imperdiet. Quisque ornare sem eu tincidunt dapibus.
      </BodyText>
      <br/>
      <Inverted fill className="padded-top">
        <BodyText>Integer non nibh diam. Integer non fringilla est. Fusce eu pharetra ipsum, eget iaculis eros.
          Nunc id ligula et magna iaculis eleifend. Cras et risus sit amet nulla semper varius. Ut sodales consequat
        felis, quis porttitor felis gravida at. Nam vitae vestibulum tortor.</BodyText>
        <Directors />
      </Inverted>
    </Content>
  </Page>
}
