import React, { Component } from 'react'
import Page from './Page'
import { Layout } from 'components/Grid'
import { Dropdown, Showcase, People } from 'components'
import { people } from 'modules/data'
import { urlify, getFullName } from 'modules/helper'
import { variables } from 'styles'
import { random } from 'modules/math'

const DIRECTOR_PATH = '/directors/'

const DirectorLayout = new Layout(60, false)

function DirectorList({ director, directors }) {
  return <Dropdown title='Directors' items={directors.map(d => getFullName(d))}
    path={DIRECTOR_PATH} selected={director}/>
}

export default class Directors extends Component {

  state = {
    directors : []
  }

  size = () => {
    return {
      width: 4 + random(),
      height: 3 + random()
    }
  }

  componentDidMount() {
    people.then(ppl => {
      const directors = ppl.filter(p => p.directorData && p.directorData.showOnWebsite)
      setTimeout(() => this.setState({ directors }), variables.animationTime.value)
    })
  }

  render () {

    const { children, ...other } = this.props
    const { directors } = this.state
    const { director, product } = other.routeParams

    const directorDoc = director ? directors.filter(doc => urlify(getFullName(doc)) === director)[0] : null
    const showcaseId = directorDoc ? directorDoc.directorData.showcase : null

    return <Page id='directors-page' {...other}>
      <DirectorList director={director} directors={directors}  />

      <div id='director' className='inverse fill transition-slide-down'>
        <People director path={DIRECTOR_PATH} featured={director} layout={DirectorLayout}
          size={this.size} />
        <Showcase path={DIRECTOR_PATH + '/' + director} featuredShowcase={showcaseId}
        featuredProduct={product} />
      </div>

      {children}
    </Page>
  }

}
