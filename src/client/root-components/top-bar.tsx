import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled(props => {

    return < div {...props}>

        <h2>Global Mechanic</h2>

        <Link to='/menu'>|||</Link>

    </div >
})`

    display: flex;
    align-items: center;

    margin: 1em;

    h2 {
        margin: 0;
    }

    a {
        text-decoration: none;
        &:visited {
            color: inherit;
        }
    }

    > :last-child {
        margin-left: auto;
    }

`

/***************************************************************/
// Export Topbar
/***************************************************************/

export default TopBar