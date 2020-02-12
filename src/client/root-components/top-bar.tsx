import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { Link, useLocation } from 'react-router-dom'

import { Icon } from '../components/generic'
import { useStaticAssets } from './static-asset-context'
// import useScrollPosition from '../util/use-scroll-position'

/***************************************************************/
// Props
/***************************************************************/

interface TopBarProps {
    navIconTo: string
}

interface TopbarContainerProps {
    transparent: boolean
    theme: DefaultTheme
}

const TopBarContainer = styled.div`

    background-color: ${(p: TopbarContainerProps) => p.transparent
        ? 'transparent'
        : p.theme.colors.bg
    };

`

/***************************************************************/
// Constants
/***************************************************************/

// const UNSCROLLED_THRESHOLD = 10 // px

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled((props: TopBarProps) => {

    const {
        navIconTo,
        ...rest
    } = props

    const staticAssets = useStaticAssets()

    const location = useLocation()

    const atNav = location.pathname === navIconTo
    const atHome = location.pathname === '/'

    // const isUnscrolled = useScrollPosition().y < UNSCROLLED_THRESHOLD

    return <TopBarContainer
        transparent={atHome}
        {...rest}>

        <Link to='/'>
            <Icon image={staticAssets.logo} />
        </Link>

        <Link to={atNav ? '/' : navIconTo}>
            <Icon image={atNav ? staticAssets.x : staticAssets.hamburger} />
        </Link>

    </TopBarContainer>
})`

    display: flex;
    align-items: baseline;
    flex: 0 0 auto;
    padding: 0.5em 0.75em 0.5em 0.75em;

    position: sticky;

    box-sizing: border-box;

    font-size: 1.5em;

    a:first-child {
        
        margin-left: calc(0.75 * env(safe-area-inset-left));
        margin-right: auto;
        
        display: inherit;
        align-items: inherit;

        span {
            width: 12.5em;
        }
    }
    a:last-child {
        margin-right: calc(0.75 * env(safe-area-inset-right));
    }

    a > h2 {
        margin: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    a:visited {
        color: inherit;
    }
`

/***************************************************************/
// Export Topbar
/***************************************************************/

export default TopBar