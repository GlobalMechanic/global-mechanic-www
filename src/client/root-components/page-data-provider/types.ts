
type FileID = string
type PageID = number

interface ContentData {
    type: string
}

interface TextContentData extends ContentData {
    text: string
    type: 'text'
}

interface VimeoContentData extends ContentData {
    vimeoId: number
    name: string
    type: 'vimeo'
}

interface FileContentData extends ContentData {
    file: FileID
    name: string
}

interface VideoContentData extends FileContentData {
    type: 'video'
}

interface ImageContentData extends FileContentData {
    type: 'image'
}

interface DownloadableContentData extends FileContentData {
    type: 'downloadable'
}

interface PageData {
    _id: number
    name: string
    path: string

    type: string

    portrait: FileID | null
    theme: 'dark' | 'light'
}

interface MenuPageData extends PageData {
    type: 'menu'

    pages: PageID[]
}

interface ContentPageData extends PageData {
    type: 'content'

    contents: ContentData[]
}

/***************************************************************/
// Exports
/***************************************************************/

export {

    ContentData,
    TextContentData,
    ImageContentData,
    VideoContentData,
    VimeoContentData,
    DownloadableContentData,

    PageData,
    ContentPageData,
    MenuPageData,
}