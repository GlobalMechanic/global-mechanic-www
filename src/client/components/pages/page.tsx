import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { PageData } from '../../root-components/page-data-provider'

/***************************************************************/
// Supporting
/***************************************************************/

const PageStyled = styled.div`

    display: flex;
    flex-direction: column;

    h1 {
        background-color: ${p => p.theme.colors.accent};
        margin: 0em 0em 0.5em 0em;
        padding: 0.5em;
        text-transform: uppercase;
    }

    flex: 1 1 auto;
`

/***************************************************************/
// Props
/***************************************************************/

interface PageProps {

    page: PageData

    title?: string

    children?: ReactElement | null | (ReactElement | null)[]

}

/***************************************************************/
// Main
/***************************************************************/

const Page = (props: PageProps): ReactElement => {

    const { page, title = page.name, children } = props

    return <PageStyled>

        {title ? <h1>{title}</h1> : null}

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