import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import Page from './page'
import { ContentPageProps } from './content-page'
import { FileContentData } from '../../root-components/page-data-provider'
import { useStaticAssets } from '../../root-components/static-asset-context'

import HOST from '../../util/host'
import { hidePlayButton } from '../../util/css'

/***************************************************************/
// Types
/***************************************************************/

interface BackgroundOverlayProps {
    staticImage: string
}

/***************************************************************/
// Helper
/***************************************************************/

function getRandom<T>(input: T[]): T {

    const rand = Math.random() * input.length
    const index = Math.floor(rand)

    return input[index]
}

/***************************************************************/
// Background
/***************************************************************/

const fixed = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -100;
`

const BackgroundOverlay = styled.span`
    ${fixed}
    background-image: url(${(p: BackgroundOverlayProps) => p.staticImage});
`

const BackgroundVideo = styled(props => {

    const { fileId, ...rest } = props

    return <div {...rest}>
        <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
        >

            <source
                src={`${HOST}/file/${fileId}`}
                type='video/mp4'
            />

        </video>
    </div>
})`
    ${fixed}

    video {
        position: inherit;

    top: 50%;
    left: 50%;

    min-width: 100%;
    min-height: 100%;

    width: auto;
    height: auto;

    opacity: 0.75;

    transform: translate(-50%, -50%);
}

    ${hidePlayButton('*')}

    background-color: ${p => p.theme.colors.fg};
`

const Hello = styled(props => {

    const staticAssets = useStaticAssets()

    return <img
        src={staticAssets.hello}
        {...props}
    />
})`
    width: calc(100vw - 1em);
    max-height: calc(100vh - 5em);
`

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = styled((props: ContentPageProps): ReactElement => {

    const { page, ...rest } = props

    const staticAssets = useStaticAssets()

    const bgVideos = page
        .contents
        .filter(content => content.type === 'file') as FileContentData[]

    const bgVideo = getRandom(bgVideos)

    return <Page page={page} {...rest}>

        {bgVideo
            ? <BackgroundVideo fileId={bgVideo.file} />
            : null
        }

        <BackgroundOverlay staticImage={staticAssets.dots} />

        <Hello />

    </Page>
})`
            
                align-items: center;
                justify-content: center;
                overflow: hidden;
                margin: auto;
            `

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage