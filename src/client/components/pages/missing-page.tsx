import React, { ReactElement } from 'react'
import styled from 'styled-components'

/***************************************************************/
// Helper Components
/***************************************************************/

const MissingPageStyle = styled.div`
    h2 { color: red; }
`

/***************************************************************/
// Main
/***************************************************************/

const MissingPage = (): ReactElement => {

    return <MissingPageStyle>
        <h2>Page Not Found!</h2>
    </MissingPageStyle>
}

/***************************************************************/
// Exports
/***************************************************************/

export default MissingPage