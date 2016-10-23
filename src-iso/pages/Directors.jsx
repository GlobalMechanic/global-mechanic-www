import React from 'react'
import directors from 'modules/directors'
import { browserHistory } from 'react-router'
import { FreeWall, Content, Dropdown } from 'components'

import Page from './Page'

const dropdownSelect = (e, dir) => {
  browserHistory.push(`/directors/${dir.id}`)
}

function DirectorBlock({ id, name, image, width, height }) {

  const click = () => {
    browserHistory.push(`/directors/${id}`)
  }

  return <div
    onClick={click}
    key={name} className='director-block bulge'
    style={{
      width,
      height
    }}>
    <div className='staff-picture' style={{backgroundImage: `url(${image})`}}/>
  </div>

}

export default function Directors(props) {

  return <Page id='directors-page' {...props}>
    <Content id='directors-content' >
      <Dropdown title='Directors' items={directors} onSelection={dropdownSelect}/>
      { props.params.director ?
        props.children :
        // <FreeWall key={props.params.director} id='director-free-wall' className='med-width' selector='.director-block'>
          <FreeWall key={props.params.director} id='director-free-wall' selector='.director-block'>
            { directors
              .map(dir => <DirectorBlock key={dir.id} {...dir}/>) }
          </FreeWall> }
    </Content>
  </Page>
}
