import React, { ReactElement, useState, useEffect } from 'react'

import Content, { ContentProps } from './content'
import { FileContentData } from '../../root-components/page-data-provider'
import fetchFileMetaData, { FileMetaData } from '../../util/fetch-file-metadata'

import HOST from '../../util/host'
import TextContent, { TextContentProps } from './text-content'

/***************************************************************/
// Helper
/***************************************************************/

const getContentType = (meta: FileMetaData): 'video' | 'image' | 'download' => {

    const { mime } = meta

    return mime.includes('video')
        ? 'video'
        : mime.includes('image')
            ? 'image'
            : 'download'

}

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
// FileContentType Components
/***************************************************************/

interface FileContentProps extends ContentProps {
    content: FileContentData
    description?: null | ((props: TextContentProps) => ReactElement)
}

interface FileMetaContentProps extends FileContentProps {
    meta: FileMetaData
}

const Video = (props: FileMetaContentProps): ReactElement => {

    const { content, meta, ...rest } = props

    return <video muted autoPlay loop {...rest}>

        <source
            src={`${HOST}/file/${content.file}`}
            type={meta.mime}
        />

    </video>
}

const Image = (props: FileMetaContentProps): ReactElement => {

    const { content, ...rest } = props

    return <img
        src={`${HOST}/file/${content.file}`}
        {...rest}
    />
}

const Download = (props: FileMetaContentProps): ReactElement => {

    const { meta, content } = props

    return <a
        target='_blank'
        rel='noopener noreferrer'
        href={`${HOST}/file/${content.file}?download=${meta.name + meta.ext}`}>
        {meta.name + meta.ext}
    </a>
}

const FileViewComponents: Record<
    'video' | 'image' | 'download',
    (props: FileMetaContentProps) => ReactElement
> = {
    video: Video,
    image: Image,
    download: Download
}

/***************************************************************/
// FileContent Component
/***************************************************************/

const FileContent = (props: FileContentProps): ReactElement => {

    const {
        description: Description = TextContent,
        content,
        ...rest
    } = props

    const meta = useFileMetadata(content.file)
    const description = meta && meta.description
    const FileViewComponent = meta && FileViewComponents[getContentType(meta)]

    return <>

        <Content content={content} {...rest}>
            {meta && FileViewComponent
                ? <FileViewComponent content={content} meta={meta} />
                : null
            }
        </Content>

        {Description && description
            ? <Description content={{
                type: 'text',
                text: description
            }} />
            : null
        }

    </>
}

/***************************************************************/
// Exports
/***************************************************************/

export default FileContent

export {
    FileContentProps
}