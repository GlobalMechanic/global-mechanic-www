import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Link } from 'react-router'
import Background from './Background'

const AnimationTime = 500 //ms

function HomeIcon() {
  return <Link to="/"
    onlyActiveOnIndex={true}
    className="nav-home left title clickable"
    activeClassName="active" />
}

function PageLink({to, children}) {
  return <Link to={to}
    className="nav-link right title clickable"
           activeClassName="active">{children}</Link>
}

function PageHolder({children}) {
  return <div id="page-holder">
    {children}
  </div>
}

function NavHolder({children}) {
  return <div id="nav-holder">
    {children}
  </div>
}

export default function Navigation({children, location}) {
  return <div>
    <NavHolder>
      <HomeIcon/>
      <PageLink to='/work'>Work</PageLink>
      <PageLink to='/directors'>Directors</PageLink>
      <PageLink to='/about'>About</PageLink>
    </NavHolder>
    <ReactCSSTransitionGroup
      component={PageHolder}
      transitionName="navigate"
      transitionEnterTimeout={AnimationTime}
      transitionLeaveTimeout={AnimationTime}>
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
    <Background/>
  </div>
}
