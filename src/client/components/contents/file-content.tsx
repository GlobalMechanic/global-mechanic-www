import React, { ReactElement, MutableRefObject, useEffect, useState, createRef } from 'react'
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

const useHeightRatio = (ref: MutableRefObject<null | HTMLVideoElement | HTMLImageElement>): number | undefined => {

    const [ratio, setRatio] = useState<number>(NaN)

    useEffect(() => {

        const tag = ref.current as HTMLVideoElement | HTMLImageElement
        const loadFuncKey = tag instanceof HTMLVideoElement
            ? 'onresize'
            : 'onload'

        tag[loadFuncKey] = () => {
            const newRatio = tag instanceof HTMLVideoElement
                ? tag.videoHeight / tag.videoWidth
                : tag.height / tag.width

            setRatio(newRatio)
        }

        return () => {
            delete tag[loadFuncKey]
        }

    }, [ref.current])

    return Number.isNaN(ratio) || ratio === 0
        ? undefined
        : ratio
}

const consume = (...args: unknown[]): unknown[] => args

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

    const ref = createRef<HTMLVideoElement>()
    const ratio = useHeightRatio(ref)

    return <video
        controls
        playsInline
        ref={ref}
        style={{
            height: `${(ratio || 0) * 100}%`
        }}
        {...rest}
    >

        <source
            src={`${HOST}/file/${content.file}`}
            type={meta.mime}
        />

    </video>
})`
    width: 100%;
    transition: height 25ms;
    outline: none;
`

const Image = styled((props: FileMetaContentProps): ReactElement => {

    const { content, meta, ...rest } = props

    // Do something with unused props to shut the linter up
    consume(meta)

    const src = `${HOST}/file/${content.file}`
    const ref = createRef<HTMLImageElement>()
    const ratio = useHeightRatio(ref)

    return <img
        src={src}
        ref={ref}
        style={{
            height: `${(ratio || 0) * 100}%`
        }}
        {...rest}
    />
})`
    width: 100%;
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