import React, { ReactElement, useContext } from 'react'
import styled, { css } from 'styled-components'

import Page from './page'
import { ContentPageProps } from './content-page'
import { TextContentData, FileContentData, PageDataContext, ContentPageData } from '../../root-components/page-data-provider'

import { TextContent, FileContent } from '../contents'
import { StaticAssets } from '../../root-components/page-routes'
import { titleFont } from '../../util/css'

/***************************************************************/
// Types
/***************************************************************/

interface SplashPageProps extends ContentPageProps {
    staticAssets: StaticAssets
}

interface BackgroundOverlayProps {
    staticImage: string
}

interface SocialMediaLinkProps {
    image: string
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

    margin-top: -0.15em;

    span {
        display: block;
        height: 1em;
    }

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${p => p.theme.colors.bg};
`

const BackgroundTextWriteup = styled(TextContent)`
    color: ${p => p.theme.colors.bg};
    font-size: 1.75em;

    position: relative;

    max-width: 34em;
    margin-bottom: 4em;
`

const SocialMediaLinks = styled.div`

    display: flex;
    position: fixed;
    bottom: 1em;

    height: 4em;

    align-items: baseline;
`

const SocialMediaLink = styled.a.attrs(() => ({
    target: '_blank'
}))`
    display: block;
    width: 2em;
    height: 2em;
    margin-left: 0.5em;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(p: SocialMediaLinkProps) => p.image});
`

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = styled((props: SplashPageProps): ReactElement => {

    const { page, staticAssets, ...rest } = props

    const fgText = page.contents.find(content => content.type === 'text') as TextContentData | void
    const bgVideo = page.contents.find(content => content.type === 'file') as FileContentData | void

    const aboutUsForSplashPageOnlyVersion = useContext(PageDataContext)
        .find(page => page.name.includes('About')) as ContentPageData | void

    const writeupForSplashPageOnlyVersion = aboutUsForSplashPageOnlyVersion &&
        aboutUsForSplashPageOnlyVersion
            .contents
            .find(content => content.type === 'text') as TextContentData | void

    return <Page page={page} {...rest}>

        {bgVideo
            ? <BackgroundVideoContent content={bgVideo} description={null} />
            : null
        }

        <BackgroundOverlay staticImage={staticAssets.dots} />

        <SocialMediaLinks>
            <SocialMediaLink image={staticAssets.insta} href='https://www.instagram.com/globalmechanic/?hl=en' />
            <SocialMediaLink image={staticAssets.facebook} href='https://www.facebook.com/GlobalMechanicMedia/' />
            <SocialMediaLink image={staticAssets.vimeo} href='https://vimeo.com/globalmechanicmedia' />
            <SocialMediaLink image={staticAssets.twitter} href='https://twitter.com/globalmechanic?lang=en' />
        </SocialMediaLinks>

        {fgText
            ? <BackgroundTextContent content={fgText} />
            : null
        }

        {writeupForSplashPageOnlyVersion
            ? <BackgroundTextWriteup content={writeupForSplashPageOnlyVersion} />
            : null
        }

    </Page>
})`
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage