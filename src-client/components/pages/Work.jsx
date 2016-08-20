import React from 'react'

import { DropdownButton, Grid } from 'react-bootstrap'
import { Link } from 'react-router'
import randomColor from 'random-color'

import FreeWall from '../FreeWall'

const rHex = () => randomColor().hexString()

function rInt(lo=50, high=250) {
  const range = Math.random() * (high - lo)
  return Math.round(range + lo)
}

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

      <FreeWall id="free-wall" selector=".block" targetHeight={700}>
      { Array.from({length:rInt(15,30)}, (val,key) => <div
        key={key} className="block"
        style={{backgroundColor: rHex(), width: rInt(200,500), height: rInt(100,400)}}>
          {`cell-${key}`}
        </div>) }
      </FreeWall>

    </Grid>

  </div>
}
