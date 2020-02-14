import {
    PageData,
    ContentData,
    ContentPageData,

    TextContentData,
    VimeoContentData,

    FileContentData,
    MenuPageData
} from '../../client/root-components/page-data-provider/types'

import urlify from '../../client/util/urlify'

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

    staffData: {
        portrait: RecordID | null
        essay: string
    }

    directorData: {
        portrait: RecordID | null
        essay: string
        showcase: RecordID | null
    }

}

interface ProductRecord extends Record {
    name: string
    productType: 'vimeo' | 'gallery'

    description: string

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

    portrait: RecordID | null
    products: RecordID[] | null

    website: {
        essay: string
        scope: 'dark' | 'light'
        mainMenuCategory: string | null
        priority: number
    }

    files: RecordID[] | null
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

    const splashPage = serviceData.showcases.find(
        show => show.name === '2020 New Website Splash Page'
    )

    const backgroundVideos: ContentData[] = splashPage &&
        splashPage.files &&
        splashPage.files.map(file => ({
            type: 'file',
            file
        })) || []

    return {
        _id: newPageId(),
        name: 'Splash',
        path: '', // cuz home page
        type: 'content',
        contents: backgroundVideos,
        theme: splashPage &&
            splashPage.website &&
            splashPage.website.scope === 'light'
            ? 'light'
            : 'dark',
        portrait: null,

        flags: {
            socialMediaLinks: true
        }
    }

}

function createAboutUsPage(serviceData: ServiceData): ContentPageData {

    const { showcases } = serviceData

    const aboutUsPage = showcases.find(
        showcase => showcase.name === 'About Us'
    )

    const writeUp: TextContentData | undefined = aboutUsPage && {
        type: 'text',
        text: aboutUsPage.website.essay,
    }

    const contents: ContentData[] = []
    if (writeUp)
        contents.push(writeUp)

    if (aboutUsPage && aboutUsPage.files) for (const fileId of aboutUsPage.files) {
        const file: FileContentData = {
            type: 'file',
            file: fileId
        }
        contents.push(file)
    }

    return {
        _id: newPageId(),
        name: 'About',
        path: 'about',
        type: 'content',

        contents,

        theme: aboutUsPage &&
            aboutUsPage.website &&
            aboutUsPage.website.scope === 'light'
            ? 'light'
            : 'dark',

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

function contentDataFromProduct(product: ProductRecord, useDescription: boolean): ContentData[] {

    const contents: ContentData[] = []

    if (product &&
        product.video &&
        product.video.vimeoId &&
        product.productType === 'vimeo'
    ) {
        const vimeoContent: VimeoContentData = {
            type: 'vimeo',
            name: product.name,
            vimeoId: product.video.vimeoId
        }
        contents.push(vimeoContent)

    } else if (product && product.images && product.productType === 'gallery') {
        for (const image of product.images) {
            const gifContent: FileContentData = {
                type: 'file',
                file: image
            }
            contents.push(gifContent)
        }
    }

    if (product && product.description && useDescription) {
        const textContent: TextContentData = {
            type: 'text',
            text: product.description
        }
        contents.push(textContent)
    }

    return contents
}

function createCategoryAndGenericPages(serviceData: ServiceData): {
    categoryPages: PageData[]
    genericPages: PageData[]
} {

    const genericPages: PageData[] = []
    const categoryPages: PageData[] = []

    const sortedShowcases = [...serviceData.showcases]
    sortedShowcases.sort((a, b) => a.website.priority - b.website.priority)

    // Create showcase pages
    for (const showcase of sortedShowcases) {

        const { name, portrait, website, files, products } = showcase
        const { mainMenuCategory, scope, essay } = website

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
            theme: scope === 'light'
                ? 'light'
                : 'dark'
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

        if (files) for (const fileId of files) {
            const file: FileContentData = {
                type: 'file',
                file: fileId
            }
            page.contents.push(file)
        }

        if (products) for (const productId of products) {
            const product = serviceData.products.find(p => p._id.toString() === productId)
            if (product)
                page.contents = [
                    ...page.contents,
                    ...contentDataFromProduct(product, false)
                ]
        }

        if (page.contents.length > 0)
            genericPages.push(page)
    }

    // Create individual product pages
    for (const product of serviceData.products) {

        const { name, portrait } = product

        const page: ContentPageData = {
            _id: newPageId(),
            type: 'content',
            name,
            path: urlify(name),
            contents: contentDataFromProduct(product, true),
            portrait,
            theme: 'light'
        }

        if (
            page.contents.length > 0 &&
            !genericPages.some(gPage => gPage.path === page.path)
        )
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

        } else console.warn(
            `multiple pages with path "/${page.path}" found`
        )
    }

    return output

}

/***************************************************************/
// Main
/***************************************************************/

function convertServiceDataToPages(
    serviceData: ServiceData
): PageData[] {

    lastPageID = 0

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

    return pages
}

/***************************************************************/
// Exports
/***************************************************************/

export default convertServiceDataToPages

export {
    PersonRecord,
    ProductRecord,
    ShowcaseRecord,
    ServiceData
}