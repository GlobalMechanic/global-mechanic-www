import React, { ReactElement, createRef } from 'react'
import styled from 'styled-components'

import { ContentProps } from './content'
import { VimeoContentData } from '../../root-components/page-data-provider'

import { content } from '../../util/css'
import useAspectRatioHeightStyle from '../../util/use-aspect-ratio-height-style'

/***************************************************************/
// Props
/***************************************************************/

interface VimeoContentProps extends ContentProps {
    content: VimeoContentData
}

/***************************************************************/
// Main
/***************************************************************/

const VimeoContent = styled((props: VimeoContentProps): ReactElement => {

    const { content, ...rest } = props

    const ref = createRef<HTMLDivElement>()
    const style = useAspectRatioHeightStyle(16 / 9, ref)

    return <div ref={ref} style={style} {...rest}>
        <iframe
            src={`https://player.vimeo.com/video/${content.vimeoId}`}
            frameBorder={0}
            allow='autoplay; fullscreen'
            allowFullScreen>
        </iframe>
    </div >
})`
    ${content}

    background-color: ${p => p.theme.colors.accent};

    iframe {
        width: 100%;
        height: 100%;
    }

    margin-bottom: 0.75em;
`

/***************************************************************/
// Exports
/***************************************************************/

export default VimeoContent

export {
    VimeoContentProps
}