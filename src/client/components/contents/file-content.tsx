import React, { ReactElement } from 'react'
import Content, { ContentProps } from './content'
import { FileContentData } from '../../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface FileContentProps extends ContentProps {
    content: FileContentData
}

/***************************************************************/
// Main
/***************************************************************/

const FileContent = (props: FileContentProps): ReactElement => {

    const { content } = props

    return <Content content={content}>
        FileID: {content.file}
    </Content>
}

/***************************************************************/
// Exports
/***************************************************************/

export default FileContent

export {
    FileContentProps
}