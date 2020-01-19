import React, { ReactElement } from 'react'
import styled from 'styled-components'

/***************************************************************/
// Helper Components
/***************************************************************/

const PageNotFoundStyle = styled.div`
    h2 { color: red; }
`

/***************************************************************/
// Main
/***************************************************************/

const Page = (): ReactElement => {

    return <PageNotFoundStyle>
        <h2>Page Not Found!</h2>
    </PageNotFoundStyle>
}

/***************************************************************/
// Exports
/***************************************************************/

export default Page