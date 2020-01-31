"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const urlify_1 = __importDefault(require("../../util/urlify"));
const pluck_1 = __importDefault(require("../../util/pluck"));
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
];
const HACKY_REBRAND_TAG_SEARCH_STRING = '#2020RebrandTags';
const $$temp = Symbol('temporary-flags-for-creating-showcases');
/***************************************************************/
// Module State
/***************************************************************/
let lastPageID = 0;
/***************************************************************/
// Helper
/***************************************************************/
const newPageId = () => ++lastPageID;
const castTagValue = (value) => {
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    const number = parseFloat(value);
    if (Number.isNaN(number))
        return value;
    return number;
};
/**
 * Looks for the string #2020RebrandTags in a given essay string,
 * removes it and text following it, parsing the data into tags.
 * Returns the hacky pragma tags and the sanitized essay string.
 * @param rawEssay
 */
function pluckPragmaTagsFromRawEssay(rawEssay) {
    const [essay, rawTags] = rawEssay.split(HACKY_REBRAND_TAG_SEARCH_STRING);
    const tags = rawTags
        ? rawTags
            .split(/\n/g)
            .filter(t => t.trim())
            .reduce((hash, tag) => {
            const [key, value] = tag
                .split('=')
                .map(keyOrValue => keyOrValue.trim());
            if (hash)
                hash[key] = castTagValue(value);
            return hash;
        }, {})
        : {};
    return {
        essay,
        tags: tags && Object.keys(tags).length > 0
            ? tags
            : null
    };
}
function createSplashPage(serviceData) {
    const splashShowcase = pluck_1.default(serviceData.showcases, show => show.name.includes('Splash') && show.name.includes('New Website'));
    const randomBackgroundVideo = splashShowcase && splashShowcase.files[Math.floor(Math.random() * splashShowcase.files.length)];
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
        theme: 'light',
        portrait: null
    };
}
function createAboutUsPage(serviceData) {
    const NAME = 'About Us';
    const { showcases } = serviceData;
    const aboutUsPage = pluck_1.default(showcases, showcase => showcase.name === NAME);
    const writeUp = aboutUsPage && {
        type: 'text',
        text: aboutUsPage.essay,
    };
    return {
        _id: newPageId(),
        name: NAME,
        path: urlify_1.default(NAME),
        type: 'content',
        contents: writeUp ? [writeUp] : [],
        theme: 'dark',
        portrait: null
    };
}
function createMainContentPages(privatePages) {
    const mainPages = [];
    for (const mainContentPageName of HARD_CODED_MAIN_MENU_PAGE_NAMES) {
        mainPages.push({
            _id: newPageId(),
            name: mainContentPageName,
            path: urlify_1.default(mainContentPageName),
            type: 'menu',
            pages: privatePages
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore $$mainMenuPage is a temp symbol
                .filter(page => page[$$temp] && page[$$temp].linkToMainMenu === mainContentPageName)
                .map(page => page._id),
            theme: 'dark',
            portrait: null
        });
    }
    return mainPages;
}
function createMainMenuPage(mainPages) {
    return {
        _id: newPageId(),
        name: 'Main Menu',
        path: 'menu',
        type: 'menu',
        pages: mainPages.map(page => page._id),
        theme: 'light',
        portrait: null
    };
}
function createGenericPages(serviceData) {
    const pages = [];
    for (const { name, portrait, scope, essay: rawEssay, files, products } of serviceData.showcases) {
        const page = {
            _id: newPageId(),
            name,
            path: urlify_1.default(name),
            type: 'content',
            contents: [],
            portrait,
            theme: scope === 'public' ? 'light' : 'dark'
        };
        const { essay, tags } = pluckPragmaTagsFromRawEssay(rawEssay);
        if (tags)
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore $$mainMenuPage is a temp symbol
            page[$$temp] = tags;
        if (essay) {
            const essayContent = {
                type: 'text',
                text: essay
            };
            page.contents.push(essayContent);
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
        for (const fileId of files) {
            const file = {
                type: 'file',
                file: fileId
            };
            page.contents.push(file);
        }
        pages.push(page);
    }
    return pages;
}
function removeSymbolsFromPages(pages) {
    return pages.map(page => ({ ...page }));
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
    const privatePages = createGenericPages(serviceData);
    const publicPages = createMainContentPages(privatePages);
    const mainMenuPage = createMainMenuPage([
        aboutPage,
        ...publicPages
    ]);
    let pages = [
        splashPage,
        mainMenuPage,
        aboutPage,
        ...publicPages,
        ...privatePages
    ];
    pages = removePagesWithDuplicatePaths(pages);
    pages = removeSymbolsFromPages(pages);
    return pages;
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = convertServiceDataToPages;
