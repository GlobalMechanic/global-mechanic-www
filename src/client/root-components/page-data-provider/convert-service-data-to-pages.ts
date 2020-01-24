import {
    PageData,
    ContentData,
    ContentPageData,

    TextContentData,
    VimeoContentData,

    FileContentData,
    MenuPageData
} from './types'

import urlify from '../../util/urlify'
import pluck from '../../util/pluck'

/***************************************************************/
// Convert Service Data To Pages
/***************************************************************/

// This file exists to convert the data of the gears-api to something
// sensible for the website to construct it's pages with. 
//
// Eventually the gears-api will be updated to export data in the
// same manner as this method, rendering it obsolete.
//
// This page is quick, dirty and hacky. 
// Unless you're Ben you probably don't need to touch it.

/***************************************************************/
// Old Gears API Record Types
/***************************************************************/

type RecordID = string

interface Record {
    _id: RecordID
}

interface PersonRecord extends Record {

    name: { first: string, last: string }

    role: string
    portrait: RecordID | null

    essay: string
    showcase: RecordID | null
}

interface ProductRecord extends Record {
    name: string
    type: 'vimeo' | 'gallery'

    essay: string

    video: null | {
        vimeoId: number
        width: number
        height: number
        duration: number
    }

    portrait: RecordID | null
    images: RecordID[] | null
    clients: RecordID[]
    directors: RecordID[]
}

interface ShowcaseRecord extends Record {
    name: string
    essay: string

    portrait: RecordID | null
    products: RecordID[]

    scope: 'private' | 'public' | 'work-in-progress' | 'unpublished'

    files: RecordID[]
}

interface ServiceData {
    people: PersonRecord[]
    products: ProductRecord[]
    showcases: ShowcaseRecord[]
}

type HackyRebrandTags = null | { [key: string]: string | boolean | number }

/***************************************************************/
// Constants
/***************************************************************/

const HARD_CODED_MAIN_MENU_PAGE_NAMES = [
    'Series',
    'Interactive',
    'Advertising',
    'Installations',
    'Documentry',
    'Film'
]

const HACKY_REBRAND_TAG_SEARCH_STRING = '#2020RebrandTags'

const $$temp = Symbol('temporary-flags-for-creating-showcases')

/***************************************************************/
// Module State
/***************************************************************/

let lastPageID = 0

/***************************************************************/
// Helper
/***************************************************************/

const newPageId = (): number => ++lastPageID

const castTagValue = (value: string): number | boolean | string => {

    if (value === 'true')
        return true

    if (value === 'false')
        return false

    const number = parseFloat(value)
    if (Number.isNaN(number))
        return value

    return number
}

/**
 * Looks for the string #2020RebrandTags in a given essay string,
 * removes it and text following it, parsing the data into tags. 
 * Returns the hacky pragma tags and the sanitized essay string.
 * @param rawEssay 
 */
function pluckPragmaTagsFromRawEssay(rawEssay: string): {
    essay: string
    tags: HackyRebrandTags
} {

    const [essay, rawTags] = rawEssay.split(HACKY_REBRAND_TAG_SEARCH_STRING)

    const tags = rawTags
        ? rawTags
            .split(/\n/g)
            .filter(t => t.trim())
            .reduce((hash: HackyRebrandTags, tag) => {

                const [key, value] = tag
                    .split('=')
                    .map(keyOrValue => keyOrValue.trim())

                if (hash)
                    hash[key] = castTagValue(value)

                return hash

            }, {})
        : {}

    return {
        essay,
        tags: tags && Object.keys(tags).length > 0
            ? tags
            : null
    }

}

function createSplashPage(serviceData: ServiceData): ContentPageData {

    const justClicks = serviceData.products.find(product => product.name.includes('Just'))
    const backgroundVideo: VimeoContentData | null = justClicks &&
        justClicks.video
        ? {
            type: 'vimeo',
            name: justClicks.name,
            vimeoId: justClicks.video.vimeoId
        }
        : null

    const helloText: TextContentData = {
        type: 'text',
        text: 'Hello'
    }

    const contents: ContentData[] = []

    if (backgroundVideo)
        contents.push(backgroundVideo)

    contents.push(helloText)

    return {
        _id: newPageId(),
        name: 'Splash',
        path: '', // cuz home page
        type: 'content',
        contents,
        theme: 'light',
        portrait: null
    }

}

function createAboutUsPage(serviceData: ServiceData): ContentPageData {

    const NAME = 'About Us'

    const { showcases } = serviceData

    const aboutUsPage = pluck(showcases, showcase => showcase.name === NAME)

    const writeUp: TextContentData | undefined = aboutUsPage && {
        type: 'text',
        text: aboutUsPage.essay,
    }

    return {
        _id: newPageId(),
        name: NAME,
        path: urlify(NAME),
        type: 'content',

        contents: writeUp ? [writeUp] : [],

        theme: 'dark',
        portrait: null
    }
}

function createMainContentPages(privatePages: PageData[]): MenuPageData[] {

    const mainPages: MenuPageData[] = []

    for (const mainContentPageName of HARD_CODED_MAIN_MENU_PAGE_NAMES) {
        mainPages.push({
            _id: newPageId(),
            name: mainContentPageName,
            path: urlify(mainContentPageName),
            type: 'menu',

            pages: privatePages
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore $$mainMenuPage is a temp symbol
                .filter(page => page[$$temp] && page[$$temp].linkToMainMenu === mainContentPageName)
                .map(page => page._id),

            theme: 'dark',
            portrait: null
        })
    }

    return mainPages
}

function createMainMenuPage(mainPages: PageData[]): MenuPageData {
    return {
        _id: newPageId(),
        name: 'Main Menu',
        path: 'main',
        type: 'menu',

        pages: mainPages.map(page => page._id),

        theme: 'light',
        portrait: null
    }
}

function createGenericPages(serviceData: ServiceData): PageData[] {

    const pages: PageData[] = []

    for (const { name, portrait, scope, essay: rawEssay, files, products } of serviceData.showcases) {

        const page: ContentPageData = {
            _id: newPageId(),
            name,
            path: urlify(name),
            type: 'content',
            contents: [],
            portrait,
            theme: scope === 'public' ? 'light' : 'dark'
        }

        const { essay, tags } = pluckPragmaTagsFromRawEssay(rawEssay)

        if (tags)
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore $$mainMenuPage is a temp symbol
            page[$$temp] = tags

        if (essay) {
            const essayContent: TextContentData = {
                type: 'text',
                text: essay
            }
            page.contents.push(essayContent)
        }

        for (const productId of products) {
            const product = serviceData.products.find(p => p._id === productId)
            if (product && product.video) {
                const vimeoContent: VimeoContentData = {
                    type: 'vimeo',
                    name: product.name,
                    vimeoId: product.video.vimeoId
                }
                page.contents.push(vimeoContent)
            }

            if (product && product.essay) {
                const textContent: TextContentData = {
                    type: 'text',
                    text: product.essay
                }
                page.contents.push(textContent)
            }
        }

        for (const fileId of files) {
            const file: FileContentData = {
                type: 'file',
                file: fileId
            }
            page.contents.push(file)
            // TODO get file writeup
        }

        pages.push(page)
    }

    return pages
}

function removeSymbolsFromPages(pages: PageData[]): PageData[] {
    return pages.map(page => ({ ...page }))
}

function removePagesWithDuplicatePaths(pages: PageData[]): PageData[] {

    const pathTable: { [path: string]: true } = {}

    const output: PageData[] = []

    for (const page of pages) {

        if (!pathTable[page.path]) {
            pathTable[page.path] = true
            output.push(page)
        } else
            console.warn(`multiple pages with path "/${page.path}" found`)
    }

    return output

}

/***************************************************************/
// Main
/***************************************************************/

function convertServiceDataToPages(
    serviceData: ServiceData
): PageData[] {

    const splashPage = createSplashPage(serviceData)
    const aboutPage = createAboutUsPage(serviceData)
    const privatePages = createGenericPages(serviceData)
    const publicPages = createMainContentPages(privatePages)

    const mainMenuPage = createMainMenuPage([
        aboutPage,
        ...publicPages
    ])

    let pages = [
        splashPage,
        mainMenuPage,
        aboutPage,
        ...publicPages,
        ...privatePages
    ]

    pages = removePagesWithDuplicatePaths(pages)

    pages = removeSymbolsFromPages(pages)

    return pages
}

/***************************************************************/
// Exports
/***************************************************************/

export default convertServiceDataToPages

export {
    ServiceData
}