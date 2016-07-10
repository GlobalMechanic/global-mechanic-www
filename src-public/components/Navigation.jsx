import React from 'react'
import { Link } from 'react-router'
import { Grid, Row } from 'react-bootstrap'
import Background from './Background'

function PageNav(props) {

  const name = props.name
  const href = props.href || '/' + name.toLowerCase()
  const onlyActiveOnIndex = href === '/'
  const className = href === '/' ? 'page-nav-home' : 'page-nav-item'

  return <Link to={href} onlyActiveOnIndex={onlyActiveOnIndex} className={className} activeClassName="active" >{name}</Link>
}


export default function Splash(props) {
  return <Grid fluid>
    <Row className="page-nav">
      <PageNav href="/"/>
      <PageNav name="About"/>
      <PageNav name="Directors"/>
      <PageNav name="Work"/>
    </Row>

    {props.children}

    <Background/>
  </Grid>
}
