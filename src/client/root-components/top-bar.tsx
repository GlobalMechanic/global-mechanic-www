import React from 'react'
import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'

import { StaticAssets } from './page-routes'
import { Icon } from '../components/generic'


/***************************************************************/
// Props
/***************************************************************/

interface TopBarProps {
    staticAssets: StaticAssets
    navIconTo: string
}

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled((props: TopBarProps) => {

    const { staticAssets, navIconTo, ...rest } = props

    const location = useLocation()

    const atNav = location.pathname === navIconTo

    return < div {...rest}>


        <Link to='/'>
            <Icon image={staticAssets.nut} />
            <h2>Global Mechanic</h2>
        </Link>

        <Link to={atNav ? '/' : navIconTo}>
            <Icon image={atNav ? staticAssets.x : staticAssets.hamburger} />
        </Link>

    </div >
})`

    display: flex;
    align-items: baseline;
    margin: 0.5em 0.75em;

    position: sticky;
    top: 0.5em;

    font-size: 1.25em;

    a:first-child {
        margin-right: auto;
        display: inherit;
        align-items: inherit;
    }

    a > h2 {
        margin: 0;
    }

    a {
        text-decoration: none;
        &:visited {
            color: inherit;
        }
    }
`

/***************************************************************/
// Export Topbar
/***************************************************************/

export default TopBar