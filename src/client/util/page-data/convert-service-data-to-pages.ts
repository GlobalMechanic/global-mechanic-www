import {
    Page,
    Content,
    ContentPage,
    TextContent,
    VimeoContent,
    MenuPage
} from './types'

/***************************************************************/
// Types
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

function pluck<T>(array: T[], predicate: (t: T) => boolean): T | undefined {
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (predicate(item)) {
            array.splice(i, 1)
            return item
        }
    }

    return undefined
}

/**
 * Looks for the string #2020RebrandTags in a given essay string,
 * removes it and text following it, parsing the data into tags. 
 * Returns the hacky tags and the sanitized essay string.
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

                const [key, value] = tag.split('=').map(keyOrValue => keyOrValue.trim())
                if (hash)
                    hash[key] = value === 'true'
                        ? true
                        : value === 'false'
                            ? false
                            : isNaN(parseFloat(value))
                                ? value
                                : parseFloat(value)

                return hash

            }, {})
        : {}

    if (tags && Object.keys(tags).length > 0)
        console.log({ essay, tags })

    return {
        essay,
        tags: tags && Object.keys(tags).length > 0 ? tags : null
    }

}

function createSplashPage(serviceData: ServiceData): ContentPage {

    const justClicks = serviceData.products.find(product => product.name.includes('Just'))
    const backgroundVideo: VimeoContent | null = justClicks &&
        justClicks.video
        ? {
            type: 'vimeo',
            name: justClicks.name,
            vimeoId: justClicks.video.vimeoId
        }
        : null

    const helloText: TextContent = {
        type: 'text',
        text: 'Hello'
    }

    const contents: Content[] = []

    if (backgroundVideo)
        contents.push(backgroundVideo)

    contents.push(helloText)

    return {
        _id: newPageId(),
        name: 'Splash',
        type: 'content',
        contents,
        theme: 'light',
        portrait: null
    }

}

function createAboutUsPage(serviceData: ServiceData): ContentPage {

    const NAME = 'About Us'

    const { showcases } = serviceData

    const aboutUsPage = pluck(showcases, showcase => showcase.name === NAME)

    const writeUp: TextContent | undefined = aboutUsPage && {
        type: 'text',
        text: aboutUsPage.essay,
    }

    return {
        _id: newPageId(),
        name: NAME,
        type: 'content',

        contents: writeUp ? [writeUp] : [],

        theme: 'dark',
        portrait: null
    }
}

function createMainContentPages(privatePages: Page[]): MenuPage[] {

    const mainPages: MenuPage[] = []

    for (const mainContentPageName of HARD_CODED_MAIN_MENU_PAGE_NAMES) {
        mainPages.push({
            _id: newPageId(),
            name: mainContentPageName,
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

function createMainMenuPage(mainPages: Page[]): MenuPage {
    return {
        _id: newPageId(),
        name: 'Main Menu',
        type: 'menu',

        pages: mainPages.map(page => page._id),

        theme: 'light',
        portrait: null
    }
}

function createGenericPages(serviceData: ServiceData): Page[] {

    const pages: Page[] = []

    for (const { name, portrait, scope, essay: rawEssay, files, products } of serviceData.showcases) {

        const page: ContentPage = {
            _id: newPageId(),
            name,
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
            const essayContent: TextContent = {
                type: 'text',
                text: essay
            }
            page.contents.push(essayContent)
        }

        for (const productId of products) {
            const product = serviceData.products.find(p => p._id === productId)
            if (product && product.video) {
                const vimeoContent: VimeoContent = {
                    type: 'vimeo',
                    name: product.name,
                    vimeoId: product.video.vimeoId
                }
                page.contents.push(vimeoContent)
            }

            if (product && product.essay) {
                const textContent: TextContent = {
                    type: 'text',
                    text: product.essay
                }
                page.contents.push(textContent)
            }
        }

        pages.push(page)
    }

    return pages
}

/***************************************************************/
// Main
/***************************************************************/

function convertServiceDataToPages(
    serviceData: ServiceData
): Page[] {

    const splashPage = createSplashPage(serviceData)
    const aboutPage = createAboutUsPage(serviceData)
    const privatePages = createGenericPages(serviceData)
    const publicPages = createMainContentPages(privatePages)

    const mainMenuPage = createMainMenuPage([
        aboutPage,
        ...publicPages
    ])

    const pages = [
        splashPage,
        mainMenuPage,
        aboutPage,
        ...publicPages,
        ...privatePages
    ]

    return pages
}

/***************************************************************/
// Exports
/***************************************************************/

export default convertServiceDataToPages

export {
    ServiceData
}