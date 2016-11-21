import classNames from 'classnames'
import { Link } from 'react-router'
import Background from './Background'
import Nut from './Nut'

function HomeLink() {
  return <Link to='/' onlyActiveOnIndex
    id='home-link' className='left clickable'
    activeClassName='active' >
      <div id='home-link-mask'>
        <Nut/>
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
    <PageLink to='/work'>Work</PageLink>
    <PageLink to='/about'>About</PageLink>
  </div>
}

export default function Navigation({children, routes}) {

  const route = routes ? routes[routes.length - 1] : {}

  //Navigation should be styled inverse if the current route is
  const { inverse, dark } = route

  return <div>
    <Links inverse={inverse}/>
    {children}
    <Background dark={dark}/>
  </div>

}
