import React from 'react'

import { DropdownButton, Grid } from 'react-bootstrap'
import { Link } from 'react-router'
import randomColor from 'random-color'

import FreeWall from '../FreeWall'

const rHex = () => randomColor().hexString()

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

      <FreeWall id="free-wall" selector=".block">
      { Array.from({length:25}, (val,key) => <div
        key={key} className="block"
        style={{backgroundColor: rHex(), width: 320, height: 180}}>
          {`cell-${key}`}
        </div>) }
      </FreeWall>

    </Grid>

  </div>
}
