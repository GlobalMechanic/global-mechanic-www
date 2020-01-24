import React, { ReactElement } from 'react'
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

const TextContent = (props: TextContentProps): ReactElement => {

    const { content } = props

    return <Content content={content}>
        {content.text}
    </Content>
}

/***************************************************************/
// Exports
/***************************************************************/

export default TextContent

export {
    TextContentProps
}