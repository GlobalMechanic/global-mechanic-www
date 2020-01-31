import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { PageData } from '../../root-components/page-data-provider'

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

const Page = styled((props: PageProps): ReactElement => {

    const { page, title = page.name, children, ...rest } = props

    return <div {...rest}>

        {title ? <h1>{title}</h1> : null}

        {children}

    </div>
})`
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;
    box-sizing: border-box;

    margin: 0em 1em 0em 1em;
`


/***************************************************************/
// Exports
/***************************************************************/

export default Page

export {
    PageProps
}