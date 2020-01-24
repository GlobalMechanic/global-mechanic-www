import React, { ReactElement, useState, useEffect } from 'react'
import Content, { ContentProps } from './content'
import { FileContentData } from '../../root-components/page-data-provider'
import fetchFileMetaData, { FileMetaData } from '../../util/fetch-file-metadata'
import HOST from '../../util/host'

/***************************************************************/
// Hooks
/***************************************************************/

const useFileMetadata = (fileId: string): FileMetaData | null => {

    const [metaData, setMetaData] = useState<FileMetaData | null>(null)

    useEffect(() => {

        if (fileId)
            fetchFileMetaData(fileId).then(setMetaData)
        else if (metaData)
            setMetaData(null)

    }, [fileId])

    return metaData
}


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

    const metaData = useFileMetadata(content.file)

    return <Content content={content}>
        {metaData
            ? <a
                target='_blank'
                rel='noopener noreferrer'
                href={`${HOST}/file/${content.file}?download=${metaData.name + metaData.ext}`}>
                {metaData.name + metaData.ext}
            </a>
            : null
        }
    </Content>
}

/***************************************************************/
// Exports
/***************************************************************/

export default FileContent

export {
    FileContentProps
}