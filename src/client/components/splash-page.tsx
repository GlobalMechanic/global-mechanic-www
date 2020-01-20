import React, { ReactElement } from 'react'
import Page from './page'
import { ContentPageProps } from './content-page'
import { TextContentData, VimeoContentData } from '../root-components/page-data-provider'

import pluck from '../util/pluck'

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = (props: ContentPageProps): ReactElement => {

    const { page } = props

    const fgText = pluck(page.contents as TextContentData[], content => content.type === 'text')
    const bgVideo = pluck(page.contents as VimeoContentData[], content => content.type === 'vimeo')

    return <Page page={page} >
        {fgText
            ? <h1>{fgText.text}</h1>
            : null
        }
        {bgVideo
            ? <div>{bgVideo.vimeoId}</div>
            : null
        }
    </Page>
}

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage