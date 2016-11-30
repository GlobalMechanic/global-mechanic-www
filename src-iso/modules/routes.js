import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Home, About, Work, Directors } from 'pages'
import { Navigation } from 'components'

export default <Route path='/' component={Navigation}>
    <IndexRoute transition='navigate' component={Home}/>
    <Route path='/directors(/:director)' transition='navigate' inverse component={Directors} />
    <Route path='/work/:portfolio(/:video)' transition='navigate' inverse component={Work} />
    {/* <Route path='/private/portfolio/:portfolio' inverse component={Work}>
      <Route path='/private/portfolio/:portfolio/:video' inverse component={Video} />
    </Route> */}
    <Route path='/about(/:staff)' transition='navigate' dark component={About} />
  </Route>
