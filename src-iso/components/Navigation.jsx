import React from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Link } from 'react-router'
import Background from './Background'

const DefaultPortfolio = 'featured_work'

function HomeIcon({addTitle}) {

  const classes = 'nav-home left title clickable'
  return <Link to='/'
    onlyActiveOnIndex
    className={classes}
    activeClassName='active' >{addTitle ? <span>GlobalMechanic</span> : null}</Link>
}

function PageLink({to, hidden, children}) {

  const classes = 'nav-link right title ' +
    (hidden ? 'hidden' : 'clickable')

  return <Link to={to}
    className={classes}
    activeClassName='active'>{children}</Link>
}

function NavHolder({children, inverse}) {
  const classes = inverse ? ' inverse' : ''

  return <div id='nav-holder' className={classes}>
    {children}
  </div>
}

export default function Navigation({children, routes}) {
  const currRoute = routes ? routes[routes.length-1] : null
  const inverse = currRoute && currRoute.inverse
  const hidden = currRoute && currRoute.private

  return <div>
    <NavHolder inverse={inverse}>
      <HomeIcon addTitle={hidden}/>
      <PageLink to='/directors' hidden={hidden}>Directors</PageLink>
      <PageLink to={`/work/${DefaultPortfolio}`} hidden={hidden}>Work</PageLink>
      <PageLink to='/about' hidden={hidden}>About</PageLink>
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
