import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Content, { ContentProps } from './content'
import { TextContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface TextContentProps extends ContentProps {
    content: TextContentData
}

/***************************************************************/
// Main
/***************************************************************/

const TextContent = styled((props: TextContentProps): ReactElement => {

    const { content, ...rest } = props

    return <Content content={content} {...rest}>
        <p>{content.text}</p>
    </Content>
})`
    > p {
        margin: 0;
        font-size: 2em; 
    }

`

/***************************************************************/
// Exports
/***************************************************************/

export default TextContent

export {
    TextContentProps
}