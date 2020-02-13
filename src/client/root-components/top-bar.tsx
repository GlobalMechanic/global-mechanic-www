import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { Link, useLocation } from 'react-router-dom'

import { Icon } from '../components/generic'
import { useStaticAssets } from './static-asset-context'
import usePageMatchedToLocation from '../util/use-page-matched-to-location'
import useEndLocationPath from '../util/use-end-location-path'

/***************************************************************/
// Props
/***************************************************************/
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

// TODO these should not be hardcoded
const MENU_PATH = '/menu'

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled(props => {

    const staticAssets = useStaticAssets()
    const location = useLocation()

    const upOnePagePath = useEndLocationPath(1)
    const currentPagePath = useEndLocationPath()
    const upOnePage = usePageMatchedToLocation(
        upOnePagePath
    )

    const atMenuOrAbout = location.pathname === MENU_PATH
    const atHome = location.pathname === '/'

    const to = atMenuOrAbout
        // If we're at the menu, the nav button should go home
        ? '/'
        // Otherwise, if we can shave one section of the path and
        // end up at another page (that isn't the home page), we'll go there.
        : upOnePage &&
            upOnePage.path !== currentPagePath &&
            upOnePage.path !== '' // home page
            ? '/' + upOnePage.path
            // If not, it sends us to the menu.
            : MENU_PATH

    return <TopBarContainer
        transparent={atHome}
        {...props}>

        <Link to='/'>
            <Icon image={staticAssets.logo} />
        </Link>

        <Link to={to}>
            <Icon image={atMenuOrAbout ? staticAssets.x : staticAssets.hamburger} />
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