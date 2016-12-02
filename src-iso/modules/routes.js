import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Home, About, Work, Directors } from 'pages'
import { Navigation } from 'components'

export default <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='/directors(/:director)(/:product)' inverse component={Directors} />

    <Route path='/work/:showcase(/:product)' inverse component={Work} />
    <Route path='/private/portfolio/:showcase(/:product)' inverse dark _private component={Work} />

    <Route path='/about(/:person)' dark component={About} />
  </Route>
