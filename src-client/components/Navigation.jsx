import React from 'react'
import { Link } from 'react-router'
import { Grid, Row } from 'react-bootstrap'
import Background from './Background'

const inverseStyledRoutes = ['work']

function onInverseRoute(routes) {
  let current = routes[routes.length-1].path

  if (current)
    current = current.split('/')[1]

  return inverseStyledRoutes.includes(current)
}

function PageNav(props) {

  const name = props.name
  const href = props.href || '/' + name.toLowerCase()
  const onlyActiveOnIndex = href === '/'
  let className = href === '/' ? 'page-nav-home' : 'page-nav-item'

  if (props.inverse)
    className += ' inverse'

  return <Link to={href} onlyActiveOnIndex={onlyActiveOnIndex} className={className} activeClassName="active" >{name}</Link>
}

export default function Splash(props) {

  const inverse = onInverseRoute(props.routes)
  let rowClass = 'page-nav'

  if (inverse)
    rowClass += ' inverse'

  return <Grid fluid>
    <Row className={rowClass}>
      <PageNav href="/" inverse={inverse}/>
      <PageNav name="About" inverse={inverse}/>
      <PageNav name="Directors" inverse={inverse}/>
      <PageNav name="Work" href="/work/character" inverse={inverse}/>
    </Row>

    {props.children}

    <Background/>
  </Grid>
}
