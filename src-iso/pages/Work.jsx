import React, { Component } from 'react'
import Page from './Page'
import { Dropdown, Showcase } from '../components'
import { showcases } from 'modules/data'
import { variables } from 'styles'

function ShowcaseDropdown({documents, selected, path}) {

  const title = selected ? selected.replace(/_/g, ' ') : 'Work'

  return <Dropdown title={title} items={documents.map(doc => doc.name)}
   path={path} selected={selected}/>
}

export default class Work extends Component {

  state = {
    showcases: []
  }

  componentDidMount() {
    if (this.props.route._private)
      return

    showcases.then(res => {
      const filtered = res.filter(show => show.website.scope === 'public' && show.products.length > 0)
      setTimeout(() => this.setState({ showcases : filtered }), variables.animationTime.value)
    })
  }

  render() {

    const { children, ...other} = this.props
    const { showcases } = this.state
    const { showcase, product } = other.routeParams
    const { _private } = other.route

    const mainPath = _private ? 'private/portfolio/' : 'work/'

    const path = `/${mainPath}${showcase}`

    return <Page id='work-page' {...other}>
      <ShowcaseDropdown documents={showcases} selected={showcase} path={mainPath}/>
      <Showcase id='work-wall'  path={path}
        className='transition-slide-down inverse' 
        featuredShowcase={showcase}
        featuredProduct={product} />
      {children}
    </Page>

  }
}
