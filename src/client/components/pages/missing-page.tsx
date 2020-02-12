import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Page from './page'
import { useLocation } from 'react-router-dom'

/***************************************************************/
// Main
/***************************************************************/

const MissingPage = styled((props): ReactElement => {

    const location = useLocation()

    return <Page page={{
        type: 'page',
        theme: 'light'
    }}
        {...props}
    >

        <h1>
            <em>{location.pathname}</em> could <u>not</u> be found!
        </h1>

    </Page>
})`
    justify-content: center;
    font-size: 3vmin;
    padding: 2em;

    em {
        color: ${p => p.theme.colors.accent};
        word-break: break-all;
        font-family: monospace;
        margin-right: 0.25em;
    }

    a {
        color: inherit;
        font-size: 1.25em;
        align-self: center;
    }
`

/***************************************************************/
// Exports
/***************************************************************/

export default MissingPage