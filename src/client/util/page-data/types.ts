
type FileID = string
type PageID = number

interface Content {
    type: string
}

interface TextContent extends Content {
    text: string
    type: 'text'
}

interface VimeoContent extends Content {
    vimeoId: number
    name: string
    type: 'vimeo'
}

interface FileContent extends Content {
    file: FileID
    name: string
}

interface VideoContent extends FileContent {
    type: 'video'
}

interface ImageContent extends FileContent {
    type: 'image'
}

interface DownloadableContent extends FileContent {
    type: 'downloadable'
}

interface Page {
    _id: number
    name: string

    type: string

    portrait: FileID | null
    theme: 'dark' | 'light'
}

interface MenuPage extends Page {
    type: 'menu'

    pages: PageID[]
}

interface ContentPage extends Page {
    type: 'content'

    contents: Content[]
}

/***************************************************************/
// Exports
/***************************************************************/

export {

    Content,
    TextContent,
    ImageContent,
    VideoContent,
    VimeoContent,
    DownloadableContent,

    Page,
    ContentPage,
    MenuPage,
}