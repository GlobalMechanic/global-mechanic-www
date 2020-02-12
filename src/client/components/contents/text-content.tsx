import React, { ReactElement, Fragment } from 'react'
import styled from 'styled-components'

import { ContentProps } from './content'
import { TextContentData } from '../../root-components/page-data-provider'
import Markdown from '../generic/markdown'

import { content } from '../../util/css'

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

    return <div {...rest}>
        {content.text.split('\n').map((line, i, arr) =>
            <Fragment key={i}>
                <Markdown>{line}</Markdown>
                {i === arr.length - 1
                    ? null
                    : <br />
                }
            </Fragment >
        )}
    </div>
})`

    ${content}

    margin-left: env(safe-area-inset-left);
    margin-right: env(safe-area-inset-right);

    padding: 2em 0.75em 2em 0.75em;
`

/***************************************************************/
// Exports
/***************************************************************/

export default TextContent

export {
    TextContentProps
}