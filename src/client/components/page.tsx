import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { PageData } from '../root-components/page-data-provider'

/***************************************************************/
// Supporting
/***************************************************************/

const PageStyled = styled.div`

`

/***************************************************************/
// Props
/***************************************************************/

interface PageProps {
    page: PageData
    children?: ReactElement | ReactElement[]
}


/***************************************************************/
// Main
/***************************************************************/

const Page = (props: PageProps): ReactElement => {

    const { page, children } = props

    return <PageStyled>
        <h1>{page.name}</h1>
        {children}
    </PageStyled>
}


/***************************************************************/
// Exports
/***************************************************************/

export default Page

export {
    PageProps
}