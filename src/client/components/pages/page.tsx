import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { PageData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface PageProps {

    page: PageData

    children?: ReactElement | null | (ReactElement | null)[]

}

const Title = styled.h1`
    font-size: min(10em, max(4em, 20vw));
    margin: 0;
`

/***************************************************************/
// Main
/***************************************************************/

const Page = styled((props: PageProps): ReactElement => {

    const { page, children, ...rest } = props

    const title = typeof page.title === 'string'
        ? page.title
        : page.name

    return <div {...rest}>

        {title
            ? <Title>{title}</Title>
            : null
        }

        {children}

    </div>
})`
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;
    box-sizing: border-box;
    overflow-x: hidden;

    margin: 0em 1em 0em 1em;
`


/***************************************************************/
// Exports
/***************************************************************/

export default Page

export {
    PageProps
}