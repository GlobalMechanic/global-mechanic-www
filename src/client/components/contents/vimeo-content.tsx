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
        <iframe
            src={`https://player.vimeo.com/video/${content.vimeoId}`}
            width={640}
            height={360}
            frameBorder={0}
            allow='autoplay; fullscreen'
            allowFullScreen>
        </iframe>
    </Content >
}

/***************************************************************/
// Exports
/***************************************************************/

export default VimeoContent

export {
    VimeoContentProps
}