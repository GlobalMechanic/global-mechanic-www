import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled(props => {

    return < div {...props}>

        <h2>Global Mechanic</h2>

        <Link to='/about-us'>|||</Link>

    </div >
})`

    display: flex;
    align-items: center;

    margin: 1em;

    h2 {
        margin: 0;
    }

    > :last-child {
        margin-left: auto;
        transform: rotate(90deg);
    }

`

/***************************************************************/
// Export Topbar
/***************************************************************/

export default TopBar