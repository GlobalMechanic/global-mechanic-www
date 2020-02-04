import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ContentProps } from './content'
import { FileContentData } from '../../root-components/page-data-provider'
import fetchFileMetaData, { FileMetaData } from '../../util/fetch-file-metadata'

import HOST from '../../util/host'
import TextContent, { TextContentProps } from './text-content'
import { content } from '../../util/css'

/***************************************************************/
// Helper
/***************************************************************/

const getContentType = (meta: FileMetaData): 'markdown' | 'video' | 'image' | 'download' => {

    const { mime, ext } = meta

    return ext === 'md' || ext === '.md'
        ? 'markdown'
        : mime.includes('video')
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

const useFileText = (fileId: string): string => {

    const [text, setText] = useState('')

    useEffect(() => {

        if (fileId) {

            const URL = `${HOST}/file/${fileId}`
            fetch(URL)
                .then(res => res.text())
                .then(setText)

        } else if (text)
            setText('')
    })

    return text
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

const Video = styled((props: FileMetaContentProps): ReactElement => {

    const { content, meta, ...rest } = props

    return <video muted autoPlay loop {...rest}>

        <source
            src={`${HOST}/file/${content.file}`}
            type={meta.mime}
        />

    </video>
})`
    width: 100%; 
`

const Image = styled((props: FileMetaContentProps): ReactElement => {

    const { content, meta, ...rest } = props

    const src = `${HOST}/file/${content.file}`

    return <img
        src={src}
        {...rest}
    />
})`

    margin: auto;

    max-width: 100%;
    max-height: 100%;
    margin-bottom: -0.1em;
`

const Download = styled((props: FileMetaContentProps): ReactElement => {

    const { meta, content, ...rest } = props

    return <a
        target='_blank'
        rel='noopener noreferrer'
        href={`${HOST}/file/${content.file}?download=${meta.name + meta.ext}`}
        {...rest}
    >
        ↓ {meta.name + meta.ext}
    </a>
})`
    background-color: ${p => p.theme.colors.accent};

    font-size: 2em;
    font-family: monospace;
    
    color: inherit;
    
    padding: 0.25em;
    text-decoration: none;

    display: block;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
`

const Markdown = styled((props: FileMetaContentProps): ReactElement => {

    const text = useFileText(props.content.file)

    return <TextContent
        content={{
            type: 'text',
            text
        }}
    />
})`
    background-color: transparent;
`

const FileViewComponents: Record<
    'video' | 'image' | 'download' | 'markdown',
    (props: FileMetaContentProps) => ReactElement
> = {
    video: Video,
    image: Image,
    download: Download,
    markdown: Markdown
}

/***************************************************************/
// FileContent Component
/***************************************************************/

const FileContent = styled((props: FileContentProps): ReactElement => {

    const {
        description: Description = TextContent,
        content,
        ...rest
    } = props

    const meta = useFileMetadata(content.file)
    const description = meta && meta.description
    const FileViewComponent = meta && FileViewComponents[getContentType(meta)]

    return <>

        <div {...rest}>
            {meta && FileViewComponent
                ? <FileViewComponent
                    content={content}
                    meta={meta}
                />
                : null
            }
        </div>

        {Description && description
            ? <Description content={{
                type: 'text',
                text: description
            }} />
            : null
        }

    </>
})`
    ${content}
    display: flex;
`

/***************************************************************/
// Exports
/***************************************************************/

export default FileContent

export {
    FileContentProps
}