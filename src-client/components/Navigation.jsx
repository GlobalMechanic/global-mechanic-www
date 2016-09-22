import React from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Link } from 'react-router'
import Background from './Background'

const DefaultPortfolio = 'featured_work'

function HomeIcon() {

  return <Link to='/'
    onlyActiveOnIndex={true}
    className='nav-home left title clickable'
    activeClassName='active' />
}

function PageLink({to, children}) {

  return <Link to={to}
    className='nav-link right title clickable'
           activeClassName='active'>{children}</Link>
}

function NavHolder({children, inverse}) {
  const classes = inverse ? ' inverse' : ''

  return <div id='nav-holder' className={classes}>
    {children}
  </div>
}

export default function Navigation({children, routes}) {
  const inverse = routes && !!routes[routes.length-1].inverse

  return <div>
    <NavHolder inverse={inverse}>
      <HomeIcon />
      <PageLink to='/directors'>Directors</PageLink>
      <PageLink to={`/work/${DefaultPortfolio}`}>Work</PageLink>
      <PageLink to='/about'>About</PageLink>
    </NavHolder>
    {/* <ReactCSSTransitionGroup
      component={PageHolder}
      transitionName='navigate'
      transitionEnterTimeout={AnimationTime}
      transitionLeaveTimeout={AnimationTime}>
      {React.cloneElement(children, {
      key: location.pathname
      })}
    </ReactCSSTransitionGroup> */}
    {children}
    <Background/>
  </div>
}
