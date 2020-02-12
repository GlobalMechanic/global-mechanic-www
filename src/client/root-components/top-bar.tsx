import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { Link, useLocation } from 'react-router-dom'

import { Icon } from '../components/generic'
import { useStaticAssets } from './static-asset-context'
import useScrollPosition from '../util/use-scroll-position'

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
    const isUnscrolled = useScrollPosition().y === 0

    return <TopBarContainer
        transparent={isUnscrolled}
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
    padding: 0.5em 1.25em 0.5em 0.75em;

    position: fixed;
    top: 0em;
    width: 100vw;
    box-sizing: border-box;

    font-size: 1.5em;

    a:first-child {
        
        margin-right: auto;
        
        display: inherit;
        align-items: inherit;

        span {
            width: 12.5em;
        }
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