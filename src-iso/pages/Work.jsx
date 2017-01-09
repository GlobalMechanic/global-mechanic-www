import React, { Component } from 'react'
import Page from './Page'
import { Dropdown, Showcase } from '../components'
import { showcases } from 'modules/data'
import { variables } from 'styles'
import classNames from 'classnames'

function ShowcaseDropdown({documents, inverse, selected, path}) {

  const title = selected ? selected.replace(/_/g, ' ') : 'Work'

  return <Dropdown title={title} inverse={inverse} items={documents.map(doc => doc.name)}
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

    const inverse = !!other.route.inverse

    const mainPath = _private ? 'private/portfolio/' : 'work/'

    const path = `/${mainPath}${showcase}`

    const showcaseClasses = classNames('transition-slide-down', { inverse })

    return <Page id='work-page' {...other}>
      <ShowcaseDropdown
        inverse={inverse}
        documents={showcases}
        selected={showcase}
        path={mainPath}/>
      <Showcase id='work-wall' path={path}
        className={showcaseClasses}
        featuredShowcase={showcase}
        featuredProduct={product} />
      {children}
    </Page>

  }
}
