//okay, so this is a temp fix. As of this writing, Components and pages for this
//website arn't very iso-morphic friendly, so I'm giving the server some dummy
//routes just so that server-side routing will work.

import React from 'react'

import { IndexRoute, Route } from 'react-router'

const LoadingNut = () => <div className='loading'>Loading</div>

const Dummy = () => null

export default <Route path='/' component={LoadingNut} >
    <IndexRoute component={Dummy} />
    <Route path='/directors' inverse component={Dummy}>
      <Route path='/directors/:director' inverse component={Dummy}>
        <Route path='/directors/:director/:video' inverse component={Dummy} />
      </Route>
    </Route>
    <Route path='/work/:portfolio' inverse component={Dummy}>
      <Route path='/work/:portfolio/:video' inverse component={Dummy} />
    </Route>
    <Route path='/private/portfolio/:portfolio' inverse component={Dummy}>
      <Route path='/private/portfolio/:portfolio/:video' inverse component={Dummy} />
    </Route>
    <Route path='/about' dark component={Dummy}>
      <Route path='/about/:staff' dark component={Dummy} />
    </Route>
  </Route>
