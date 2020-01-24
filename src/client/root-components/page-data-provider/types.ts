
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
    type: 'file'
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
    VimeoContentData,

    FileContentData,
    ImageContentData,
    VideoContentData,
    DownloadableContentData,

    PageData,
    ContentPageData,
    MenuPageData,
}
