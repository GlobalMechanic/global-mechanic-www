import React from 'react'
import { Link } from 'react-router'

function PageNav(props) {
  let name = props.name
  let href = props.href || '/' + name.toLowerCase()
  let onlyActiveOnIndex = href === '/'
  return <li>
    <Link to={href} onlyActiveOnIndex={onlyActiveOnIndex} activeClassName="page-nav-active" >{name}</Link>
  </li>
}

export default function Splash(props) {
  return <div>
    <h1>Global Mechanic</h1>
    <ul role="nav">
      <PageNav name="About"/>
      <PageNav name="Home" href="/"/>
      <PageNav name="Directors"/>
      <PageNav name="Work"/>
    </ul>

    {props.children}

  </div>
}
