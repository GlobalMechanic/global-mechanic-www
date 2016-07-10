import React from 'react'
import { Link } from 'react-router'

export default function Work(props) {
  return <div>
    <h1>Work</h1>

    <ul>
      <li><Link to="/portfolios/private/neo-aequitas">Neo</Link></li>
      <li><Link to="/portfolios/public/just-clicks">Just Clicks</Link></li>
    </ul>

    {props.children}
  </div>
}
