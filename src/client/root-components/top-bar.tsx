import React from 'react'
import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'

import { Icon } from '../components/generic'
import { useStaticAssets } from './static-asset-context'

/***************************************************************/
// Props
/***************************************************************/

interface TopBarProps {
    navIconTo: string
}

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled((props: TopBarProps) => {

    const { navIconTo, ...rest } = props

    const staticAssets = useStaticAssets()
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