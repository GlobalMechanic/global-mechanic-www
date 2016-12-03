import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { Home, About, Work, Directors } from 'pages'
import { Navigation } from 'components'

export default <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='/directors(/:director)(/:product)' inverse component={Directors} />

    <Route path='/work/:showcase(/:product)' inverse component={Work} />

    <Route path='/private/showcase/:showcase(/:product)' inverse dark _private component={Work} />
    <Redirect from='/private/portfolio/:showcase(/:product)' to='/private/showcase/:showcase(/:product)'/>

    <Route path='/about(/:person)' dark component={About} />
  </Route>
