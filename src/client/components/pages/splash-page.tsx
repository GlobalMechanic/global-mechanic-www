import React, { ReactElement } from 'react'
import Page from './page'
import { ContentPageProps } from './content-page'
import { TextContentData, VimeoContentData } from '../../root-components/page-data-provider'

import pluck from '../../util/pluck'
import { TextContent, VimeoContent } from '../contents'

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = (props: ContentPageProps): ReactElement => {

    const { page } = props

    const fgText = pluck(page.contents as TextContentData[], content => content.type === 'text')
    const bgVimeo = pluck(page.contents as VimeoContentData[], content => content.type === 'vimeo')

    return <Page page={page} >
        {fgText
            ? <TextContent content={fgText} />
            : null
        }
        {bgVimeo
            ? <VimeoContent content={bgVimeo} />
            : null
        }
    </Page>
}

/***************************************************************/
// Exports
/***************************************************************/

export default SplashPage