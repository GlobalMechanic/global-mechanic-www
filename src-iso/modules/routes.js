import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Home, About, Work } from 'pages'
import { Navigation } from 'components'

export default <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    {/* <Route path='/directors' inverse component={Directors}>
      <Route path='/directors/:director' inverse component={Director}>
        <Route path='/directors/:director/:video' inverse component={Video} />
      </Route>
    </Route>*/}
    <Route path='/work/:portfolio' inverse component={Work}>
        {/* <Route path='/work/:portfolio/:video' inverse component={Video} />*/}
    </Route>
    {/* <Route path='/private/portfolio/:portfolio' inverse component={Work}>
      <Route path='/private/portfolio/:portfolio/:video' inverse component={Video} />
    </Route> */}
    <Route path='/about' dark component={About}>
      {/* <Route path='/about/:staff' dark component={Staff} /> */}
    </Route>
  </Route>
