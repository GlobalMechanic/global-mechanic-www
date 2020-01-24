import React, { ReactElement } from 'react'
import Page from './page'
import { ContentPageProps } from './content-page'
import { TextContentData, VimeoContentData } from '../../root-components/page-data-provider'

import { TextContent, VimeoContent } from '../contents'

import pluck from '../../util/pluck'

/***************************************************************/
// Main
/***************************************************************/

const SplashPage = (props: ContentPageProps): ReactElement => {

    const { page, ...rest } = props

    const fgText = pluck(page.contents as TextContentData[], content => content.type === 'text')
    const bgVimeo = pluck(page.contents as VimeoContentData[], content => content.type === 'vimeo')

    return <Page page={page} {...rest}>
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