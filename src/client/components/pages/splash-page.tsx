import React, { ReactElement, useContext } from 'react'
import styled, { css } from 'styled-components'

import Page from './page'
import { ContentPageProps } from './content-page'
import { TextContentData, FileContentData, PageDataContext, ContentPageData } from '../../root-components/page-data-provider'
import { useStaticAssets } from '../../root-components/static-asset-context'
import HOST from '../../util/host'
import { TextContent } from '../contents'

/***************************************************************/
// Types
/***************************************************************/

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

const BackgroundOverlay = styled.span`
    ${fixed}
    background-image: url(${(p: BackgroundOverlayProps) => p.staticImage});
`

const BackgroundVideo = styled(props => {

    const { fileId, ...rest } = props

    return <div {...rest}>
        <video muted loop autoPlay>
            <source src={`${HOST}/file/${fileId}`} />
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

    background-color: ${p => p.theme.colors.fg};
`

const BackgroundText = styled.h1`
    color: transparent;
    margin: 0;

    font-size: 45vmin;
    
    overflow: hidden;
    max-width: 100vw;

    flex: 0 0 auto;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${p => p.theme.colors.bg};
`

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = styled((props: ContentPageProps): ReactElement => {

    const { page, ...rest } = props

    const staticAssets = useStaticAssets()

    const fgText = page.contents.find(content => content.type === 'text') as TextContentData | void
    const bgVideo = page.contents.find(content => content.type === 'file') as FileContentData | void

    const pages = useContext(PageDataContext)
    const aboutPage = pages && pages.find(page => page.path === 'about') as ContentPageData | null

    const aboutText = aboutPage && aboutPage.contents[0] as TextContentData | null

    return <Page page={page} {...rest}>

        {bgVideo
            ? <BackgroundVideo
                fileId={bgVideo.file}
            />
            : null
        }

        <BackgroundOverlay staticImage={staticAssets.dots} />

        {fgText
            ? <BackgroundText>
                {fgText.text}
            </BackgroundText>
            : null
        }

        {aboutText
            ? <TextContent content={aboutText} />
            : null
        }

    </Page>
})`
    ${fixed};

    ${TextContent} {
        color: ${p => p.theme.colors.bg};
        width: max(50vw, 42em);
    }
    
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: auto;
`

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage