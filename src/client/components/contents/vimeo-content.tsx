import React, { ReactElement } from 'react'
import Content, { ContentProps } from './content'
import { VimeoContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface VimeoContentProps extends ContentProps {
    content: VimeoContentData
}

/***************************************************************/
// Main
/***************************************************************/

const VimeoContent = (props: VimeoContentProps): ReactElement => {

    const { content } = props

    return <Content content={content}>
        {content.vimeoId.toString()}
    </Content>
}

/***************************************************************/
// Exports
/***************************************************************/

export default VimeoContent

export {
    VimeoContentProps
}