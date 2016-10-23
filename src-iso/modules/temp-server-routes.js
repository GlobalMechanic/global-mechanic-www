//okay, so this is a temp fix. As of this writing, Components and pages for this
//website arn't very iso-morphic friendly, so I'm giving the server some dummy
//routes just so that server-side routing will work.

import React from 'react'

import { Route } from 'react-router'

export default <Route path='/'>
    <Route path='/directors'>
      <Route path='/directors/:director' >
        <Route path='/directors/:director/:video'/>
      </Route>
    </Route>
    <Route path='/work/:portfolio' >
      <Route path='/work/:portfolio/:video'/>
    </Route>
    <Route path='/private/portfolio/:portfolio'>
      <Route path='/private/portfolio/:portfolio/:video'/>
    </Route>
    <Route path='/about' >
      <Route path='/about/:staff'/>
    </Route>
  </Route>
