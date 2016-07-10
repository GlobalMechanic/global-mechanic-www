import React from 'react'
import { DropdownButton, Jumbotron, Grid } from 'react-bootstrap'
import { Link } from 'react-router'
// import HeaderLine from '../HeaderLine'
//import BodyLine from '../BodyLine'

// function PortfolioDropdown() {
//   return <
// }

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
      <Jumbotron>
        <h1>VIDEO LINKS HERE</h1>
      </Jumbotron>
    </Grid>
  </div>
}
