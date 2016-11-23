import React, { addons, cloneElement } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import Background from './Background'
import Nut from './Nut'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { variables } from 'styles'

const Transition = addons ? addons.CSSTransitionGroup : null

function HomeLink() {
  return <Link to='/' onlyActiveOnIndex
    id='home-link' className='left clickable'
    activeClassName='active' >
      <div id='home-link-mask'>
        <Nut id='home-nut'/>
        <h1 id='home-link-title'>Global Mechanic</h1>
      </div>
    </Link>
}

function PageLink({to, children}) {
  return <Link to={to} activeClassName='active'
    className='link right clickable'>
      <h1>{children}</h1>
    </Link>
}

function Links({inverse}) {

  const classes = classNames({inverse, padded: true})

  return <div id='links' className={classes}>
    <HomeLink/>
    <PageLink to='/directors'>Directors</PageLink>
    <PageLink to='/work/featured_work'>Work</PageLink>
    <PageLink to='/about'>About</PageLink>
  </div>
}

function Pages({children, ...other}) {
  return <div id='pages' {...other}>{children}</div>
}

export default function Navigation({children, routes}) {

  const route = routes ? routes[routes.length - 1] : {}

  //Navigation should be styled inverse if the current route is
  const { inverse, dark, transition } = route

  const path = route.path || 'home'
  const key = path.match(/(\w+)/)[1]

  return <div>
    <Links inverse={inverse}/>
    { Transition ? <Transition
      component={Pages}
      transitionName={transition || 'none'}
      transitionEnterTimeout={variables.animationTime.value}
      transitionLeaveTimeout={variables.animationTime.value}>
      {cloneElement(children, { key })}
    </Transition> : children}
    <Background dark={dark}/>
  </div>

}
