import React from 'react'

import { Navigation } from 'components'
import { Splash, Directors, Director, About, Work, Video, Staff } from 'pages'
import { IndexRoute, Route } from 'react-router'

export default <Route path='/' component={Navigation} >
    <IndexRoute component={Splash} />
    <Route path='/directors' inverse component={Directors}>
      <Route path='/directors/:director' inverse component={Director}>
        <Route path='/directors/:director/:video' inverse component={Video} />
      </Route>
    </Route>
    <Route path='/work/:portfolio' inverse component={Work}>
      <Route path='/work/:portfolio/:video' inverse component={Video} />
    </Route>
    <Route path='/private/portfolio/:portfolio' inverse private component={Work}>
      <Route path='/private/portfolio/:portfolio/:video' inverse private component={Video} />
    </Route>
    <Route path='/about' dark component={About}>
      <Route path='/about/:staff' dark component={Staff} />
    </Route>
  </Route>
