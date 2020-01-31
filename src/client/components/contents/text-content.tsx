import React, { ReactElement, Fragment } from 'react'
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
        {content.text.split('\n').map((line, i, arr) =>
            <Fragment key={i}>
                <span>{line}</span>
                {i === arr.length - 1
                    ? null
                    : <br />
                }
            </Fragment >)
        }
    </Content>
})` `

/***************************************************************/
// Exports
/***************************************************************/

export default TextContent

export {
    TextContentProps
}