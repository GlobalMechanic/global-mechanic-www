import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Supporting
/***************************************************************/

const ContentStyled = styled.div`

`

/***************************************************************/
// Props
/***************************************************************/

interface ContentProps {
    content: ContentData
    children?: ReactElement | string | null | (ReactElement | string | null)[]
}


/***************************************************************/
// Main
/***************************************************************/

const Content = (props: ContentProps): ReactElement => {

    const { content, children } = props

    return <ContentStyled>

        <em>{content.type}</em>
        <br />

        {children}

    </ContentStyled>
}


/***************************************************************/
// Exports
/***************************************************************/

export default Content

export {
    ContentProps
}