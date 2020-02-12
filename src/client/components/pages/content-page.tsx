import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Page, { PageProps } from './page'
import { ContentPageData, TextContentData, VimeoContentData, FileContentData } from '../../root-components/page-data-provider'
import { TextContent, VimeoContent, FileContent } from '../contents'

/***************************************************************/
// Props
/***************************************************************/

interface ContentPageProps extends PageProps {
    page: ContentPageData
}

/***************************************************************/
// Main
/***************************************************************/

const ContentPage = styled((props: ContentPageProps): ReactElement => {

    const { page, ...rest } = props

    return <Page page={page} {...rest}>
        {page.contents.map((content, i) => content.type === 'text'

            ? <TextContent key={i} content={content as TextContentData} />

            : content.type === 'vimeo'
                ? <VimeoContent key={i} content={content as VimeoContentData} />
                : <FileContent key={i} content={content as FileContentData} />
        )}
    </Page>
})`
    align-items: flex-start;
    padding-bottom: 2em;
`

/***************************************************************/
// Exports
/***************************************************************/

export default ContentPage

export {
    ContentPageProps
}