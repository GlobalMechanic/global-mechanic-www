import React from 'react'

import { DropdownButton, Grid } from 'react-bootstrap'
import { Link } from 'react-router'

import FreeWall from '../FreeWall'

export default function Work(props) {

  return <div>

    <div id='work-header'>
      <DropdownButton title={props.params.portfolio} id='work-dropdown'>
        <Link to='/work/cartoon'>Cartoon</Link>
        <Link to='/work/advertisment'>Advertisment</Link>
        <Link to='/work/character'>Character</Link>
      </DropdownButton>
    </div>

    <Grid fluid style={{ marginTop:'25px' }}>
      {/* <FreeWall targetHeight={300}>{
        Array.from({length:20}, (val,key)=> <div key={key}>{`cell-${key}`}</div>)
      }</FreeWall> */}
      <FreeWall>

      </FreeWall>
    </Grid>

  </div>
}
