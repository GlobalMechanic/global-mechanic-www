import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { StaticAssets } from './page-routes'

/***************************************************************/
// Props
/***************************************************************/

interface TopBarProps {
    staticAssets: StaticAssets
}

interface NutProps {
    staticImage: string
}

const Nut = styled.span`

    display: inline-block;
    width: 1.25em;
    height: 1em;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(p: NutProps) => p.staticImage});

`

/***************************************************************/
// Main
/***************************************************************/

const TopBar = styled((props: TopBarProps) => {

    const { staticAssets, ...rest } = props

    return < div {...rest}>

        <Nut staticImage={staticAssets.nut} /><h2>Global Mechanic</h2>

        {/* <Link to='/menu'>|||</Link> */}

    </div >
})`

    display: flex;
    align-items: baseline;
    margin: 1em;

    h2 {
        margin: 0 auto 0 0;
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