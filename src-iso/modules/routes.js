import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { Home, About, Work, Directors, Video } from 'pages'
import { Navigation } from 'components'

const DARK = 0.7

export default <Route path='/' component={Navigation}>
    <IndexRoute component={Home} />

    <Route path='/video/:video' darken={1} component={Video}/>
    <Route path='/directors(/:director)(/:product)' inverse component={Directors} />
    <Route path='/showcase/:showcase(/:product)' inverse component={Work} />
    <Redirect from='/work/:showcase(/:product)' to='/showcase/:showcase(/:product)'/>

    <Route path='/private/showcase/:showcase(/:product)' inverse darken={DARK} _private component={Work} />
    <Route path='/private/video/:video' inverse _private component={Video}/>
    <Redirect from='/private/portfolio/:showcase(/:product)' to='/private/showcase/:showcase(/:product)'/>

    <Route path='/about(/:person)' darken={DARK} component={About} />
  </Route>
