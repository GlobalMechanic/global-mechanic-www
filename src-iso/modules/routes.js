import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Home, About, Work, Directors } from 'pages'
import { Navigation } from 'components'

export default <Route path='/' component={Navigation}>
    <IndexRoute transition='navigate' component={Home}/>
    <Route path='/directors' transition='navigate' inverse component={Directors}>
      {/* <Route path='/directors/:director' inverse component={Director}>
        <Route path='/directors/:director/:video' inverse component={Video} />
      </Route>*/}
    </Route>
    <Route path='/work/:portfolio' transition='navigate' inverse component={Work}>
        {/* <Route path='/work/:portfolio/:video' inverse component={Video} />*/}
    </Route>
    {/* <Route path='/private/portfolio/:portfolio' inverse component={Work}>
      <Route path='/private/portfolio/:portfolio/:video' inverse component={Video} />
    </Route> */}
    <Route path='/about' transition='navigate' dark component={About}>
      {/* <Route path='/about/:staff' dark component={Staff} /> */}
    </Route>
  </Route>
