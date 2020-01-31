import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import Page from './page'
import { ContentPageProps } from './content-page'
import { TextContentData, FileContentData } from '../../root-components/page-data-provider'

import { TextContent, FileContent } from '../contents'
import { StaticAssets } from '../../root-components/page-routes'
import { titleFont } from '../../util/css'
import { IconProps } from '../generic/icon'

import SocialMediaLinks from '../generic/social-media-links'

/***************************************************************/
// Types
/***************************************************************/

interface SplashPageProps extends ContentPageProps {
    staticAssets: StaticAssets
}

interface BackgroundOverlayProps {
    staticImage: string
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

const BackgroundOverlay = styled.div`
    ${fixed}
    background-image: url(${(p: BackgroundOverlayProps) => p.staticImage});
`

const BackgroundVideoContent = styled(FileContent)`
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

    background-color: ${p => p.theme.colors.fg};
`

const BackgroundTextContent = styled(TextContent)`
    color: transparent;
    
    ${titleFont};
    font-size: 30vw;
    font-size: max(min(40vw, 40vh), 5em);
    
    max-width: calc(100vw - 1px);
    overflow: hidden;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${p => p.theme.colors.bg};
`

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = styled((props: SplashPageProps): ReactElement => {

    const { page, staticAssets, ...rest } = props

    const fgText = page.contents.find(content => content.type === 'text') as TextContentData | void
    const bgVideo = page.contents.find(content => content.type === 'file') as FileContentData | void

    return <Page page={page} {...rest}>

        {bgVideo
            ? <BackgroundVideoContent content={bgVideo} description={null} />
            : null
        }

        <BackgroundOverlay staticImage={staticAssets.dots} />

        <SocialMediaLinks staticAssets={staticAssets} />

        {fgText
            ? <BackgroundTextContent content={fgText} />
            : null
        }

    </Page>
})`
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: auto;
`

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage