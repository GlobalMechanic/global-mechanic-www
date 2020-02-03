"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const urlify_1 = __importDefault(require("../../util/urlify"));
const pluck_1 = __importDefault(require("../../util/pluck"));
/***************************************************************/
// Module State
/***************************************************************/
let lastPageID = 0;
/***************************************************************/
// Helper
/***************************************************************/
const newPageId = () => ++lastPageID;
function createSplashPage(serviceData) {
    const splashPage = pluck_1.default(serviceData.showcases, show => show.name === '2020 New Website Splash Page');
    const randomBackgroundVideo = splashPage && splashPage.files[Math.floor(Math.random() * splashPage.files.length)];
    const contents = [
        {
            type: 'file',
            file: randomBackgroundVideo
        },
        {
            type: 'text',
            text: 'Hello'
        }
    ];
    return {
        _id: newPageId(),
        name: 'Splash',
        path: '',
        type: 'content',
        contents,
        theme: splashPage && splashPage.scope === 'light' ? 'light' : 'dark',
        portrait: null,
        flags: {
            socialMediaLinks: true
        }
    };
}
function createAboutUsPage(serviceData) {
    const { showcases } = serviceData;
    const aboutUsPage = pluck_1.default(showcases, showcase => showcase.name === 'About Us');
    const writeUp = aboutUsPage && {
        type: 'text',
        text: aboutUsPage.essay,
    };
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
    };
}
function createMainMenuPage(mainPages) {
    return {
        _id: newPageId(),
        name: '',
        path: 'menu',
        type: 'menu',
        pages: mainPages.map(page => page._id),
        theme: 'light',
        portrait: null
    };
}
function ensureCategoryPage(category, categoryPages) {
    let categoryPage = categoryPages
        .find(page => page.name === category);
    if (!categoryPage) {
        categoryPage = {
            _id: newPageId(),
            name: category,
            path: urlify_1.default(category),
            type: 'menu',
            pages: [],
            portrait: null,
            theme: 'light'
        };
        categoryPages.push(categoryPage);
    }
    return categoryPage;
}
function createCategoryAndGenericPages(serviceData) {
    const genericPages = [];
    const categoryPages = [];
    for (const { name, portrait, scope, essay, files, products, mainMenuCategory } of serviceData.showcases) {
        const categoryPage = mainMenuCategory
            ? ensureCategoryPage(mainMenuCategory, categoryPages)
            : null;
        const page = {
            _id: newPageId(),
            name,
            path: urlify_1.default(name),
            type: 'content',
            contents: [],
            portrait,
            theme: scope === 'light' ? 'light' : 'dark'
        };
        if (categoryPage)
            categoryPage.pages.push(page._id);
        if (essay) {
            const essayContent = {
                type: 'text',
                text: essay
            };
            page.contents.push(essayContent);
        }
        for (const fileId of files) {
            const file = {
                type: 'file',
                file: fileId
            };
            page.contents.push(file);
        }
        for (const productId of products) {
            const product = serviceData.products.find(p => p._id === productId);
            if (product && product.video) {
                const vimeoContent = {
                    type: 'vimeo',
                    name: product.name,
                    vimeoId: product.video.vimeoId
                };
                page.contents.push(vimeoContent);
            }
            if (product && product.essay) {
                const textContent = {
                    type: 'text',
                    text: product.essay
                };
                page.contents.push(textContent);
            }
        }
        genericPages.push(page);
    }
    return {
        genericPages,
        categoryPages
    };
}
function removePagesWithDuplicatePaths(pages) {
    const pathTable = {};
    const output = [];
    for (const page of pages) {
        if (!pathTable[page.path]) {
            pathTable[page.path] = true;
            output.push(page);
        }
        else
            console.warn(`multiple pages with path "/${page.path}" found`);
    }
    return output;
}
/***************************************************************/
// Main
/***************************************************************/
function convertServiceDataToPages(serviceData) {
    const splashPage = createSplashPage(serviceData);
    const aboutPage = createAboutUsPage(serviceData);
    const { categoryPages, genericPages, } = createCategoryAndGenericPages(serviceData);
    const mainMenuPage = createMainMenuPage([
        aboutPage,
        ...categoryPages
    ]);
    let pages = [
        splashPage,
        mainMenuPage,
        aboutPage,
        ...categoryPages,
        ...genericPages
    ];
    pages = removePagesWithDuplicatePaths(pages);
    if (process.env.NODE_ENV === 'development') {
        const devMenuPage = {
            _id: newPageId(),
            name: 'dev-menu',
            pages: pages.map(p => p._id),
            type: 'menu',
            portrait: null,
            path: 'dev-menu',
            theme: 'dark'
        };
        pages.push(devMenuPage);
    }
    return pages;
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = convertServiceDataToPages;
