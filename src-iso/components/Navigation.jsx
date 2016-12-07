import React, { addons, cloneElement } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import Background from './Background'
import Nut from './Nut'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { variables } from 'styles'

const Transition = addons ? addons.CSSTransitionGroup : null

function HomeLink({_private}) {

  const classes = classNames('left', 'clickable', {private: _private})

  return <Link to='/' onlyActiveOnIndex id='home-link'
    className={classes} activeClassName='active' >
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

function Links({inverse, _private}) {

  const classes = classNames('padded', { inverse, private: _private })

  return <div id='links' className={classes}>
    <HomeLink />
    <PageLink to='/directors'>Directors</PageLink>
    <PageLink to='/showcase/featured_work'>Work</PageLink>
    <PageLink to='/about'>About</PageLink>
  </div>
}

function Pages({children, ...other}) {
  return <div id='pages' {...other}>{children}</div>
}

export default function Navigation({children, routes}) {

  const route = routes ? routes[routes.length - 1] : {}

  //Navigation should be styled inverse if the current route is
  const { inverse, darken, transition, _private } = route

  const path = route.path || 'home'
  const key = path.match(/(\w+)/)[1]

  return <div>
    <Links inverse={inverse} _private={_private}/>
    { Transition ? <Transition
      component={Pages}
      transitionName={transition || 'navigate'}
      transitionEnterTimeout={variables.animationTime.value}
      transitionLeaveTimeout={variables.animationTime.value}>
      {cloneElement(children, { key })}
    </Transition> : children}
    <Background darken={darken} inverse={inverse}/>
  </div>

}
