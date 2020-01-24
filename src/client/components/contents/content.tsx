import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Supporting
/***************************************************************/

const ContentStyled = styled.div`

    background-color: ${p => p.theme.colors.accent};;
    border-radius: 0.5em;

    padding: 0.75em;
    margin: 1em;
    position: relative;

    em {
        position: absolute;
        top: -0.85em;
        left: 0.25em;
        color: ${p => p.theme.colors.accent};;
        font-weight: bold;
        font-size: 150%;
    }

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

    const { content, children, ...rest } = props

    return <ContentStyled {...rest}>

        <em>{content.type}-content</em>

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