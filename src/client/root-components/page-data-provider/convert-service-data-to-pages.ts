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

    scope: 'dark' | 'light'

    mainMenuCategory: string

    files: RecordID[]
}

interface ServiceData {
    people: PersonRecord[]
    products: ProductRecord[]
    showcases: ShowcaseRecord[]
}

/***************************************************************/
// Module State
/***************************************************************/

let lastPageID = 0

/***************************************************************/
// Helper
/***************************************************************/

const newPageId = (): number => ++lastPageID

function createSplashPage(serviceData: ServiceData): ContentPageData {

    const splashPage = pluck(
        serviceData.showcases,
        show => show.name === '2020 Website Splash Page'
    )

    const randomBackgroundVideo = splashPage && splashPage.files[
        Math.floor(
            Math.random() * splashPage.files.length
        )
    ]

    const contents: ContentData[] = [
        {
            type: 'file',
            file: randomBackgroundVideo
        } as FileContentData,
        {
            type: 'text',
            text: 'Hello'
        } as TextContentData
    ]

    return {
        _id: newPageId(),
        name: 'Splash',
        path: '', // cuz home page
        type: 'content',
        contents,
        theme: splashPage && splashPage.scope === 'light' ? 'light' : 'dark',
        portrait: null,

        flags: {
            socialMediaLinks: true
        }
    }

}

function createAboutUsPage(serviceData: ServiceData): ContentPageData {


    const { showcases } = serviceData

    const aboutUsPage = pluck(
        showcases,
        showcase => showcase.name === 'About Us'
    )

    const writeUp: TextContentData | undefined = aboutUsPage && {
        type: 'text',
        text: aboutUsPage.essay,
    }

    return {
        _id: newPageId(),
        name: 'About',
        path: 'about',
        type: 'content',

        contents: writeUp ? [writeUp] : [],

        theme: aboutUsPage && aboutUsPage.scope === 'light' ? 'light' : 'dark',
        portrait: null,

        flags: {
            socialMediaLinks: true
        }
    }
}

function createMainMenuPage(mainPages: PageData[]): MenuPageData {
    return {
        _id: newPageId(),
        name: '',
        path: 'menu',
        type: 'menu',

        pages: mainPages.map(page => page._id),

        theme: 'light',
        portrait: null
    }
}

function ensureCategoryPage(category: string, categoryPages: PageData[]): MenuPageData {

    let categoryPage = categoryPages
        .find(page => page.name === category) as MenuPageData | void

    if (!categoryPage) {
        categoryPage = {
            _id: newPageId(),
            name: category,
            path: urlify(category),
            type: 'menu',
            pages: [],
            portrait: null,
            theme: 'light'
        }
        categoryPages.push(
            categoryPage
        )
    }

    return categoryPage
}

function createCategoryAndGenericPages(serviceData: ServiceData): {
    categoryPages: PageData[]
    genericPages: PageData[]
} {

    const genericPages: PageData[] = []
    const categoryPages: PageData[] = []

    for (const { name, portrait, scope, essay, files, products, mainMenuCategory } of serviceData.showcases) {

        const categoryPage = mainMenuCategory
            ? ensureCategoryPage(mainMenuCategory, categoryPages)
            : null

        const page: ContentPageData = {
            _id: newPageId(),
            name,
            path: urlify(name),
            type: 'content',
            contents: [],
            portrait,
            theme: scope === 'light' ? 'light' : 'dark'
        }

        if (categoryPage)
            categoryPage.pages.push(page._id)

        if (essay) {
            const essayContent: TextContentData = {
                type: 'text',
                text: essay
            }
            page.contents.push(essayContent)
        }

        for (const fileId of files) {
            const file: FileContentData = {
                type: 'file',
                file: fileId
            }
            page.contents.push(file)
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

        genericPages.push(page)
    }

    return {
        genericPages,
        categoryPages
    }
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
    const {
        categoryPages,
        genericPages,
    } = createCategoryAndGenericPages(serviceData)

    const mainMenuPage = createMainMenuPage([
        aboutPage,
        ...categoryPages
    ])

    let pages = [
        splashPage,
        mainMenuPage,
        aboutPage,
        ...categoryPages,
        ...genericPages
    ]

    pages = removePagesWithDuplicatePaths(pages)

    if (process.env.NODE_ENV === 'development') {

        const devMenuPage: MenuPageData = {
            _id: newPageId(),

            name: 'dev-menu',

            pages: pages.map(p => p._id),
            type: 'menu',
            portrait: null,
            path: 'dev-menu',
            theme: 'dark'
        }

        pages.push(devMenuPage)
    }

    return pages
}

/***************************************************************/
// Exports
/***************************************************************/

export default convertServiceDataToPages

export {
    ServiceData
}