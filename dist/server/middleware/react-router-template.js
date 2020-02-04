"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const react_1 = __importDefault(require("react"));
const styled_components_1 = require("styled-components");
const server_1 = require("react-dom/server");
const react_router_dom_1 = require("react-router-dom");
const website_1 = __importDefault(require("../../client/root-components/website"));
const page_data_1 = require("./page-data");
/******************************************************************************/
// Module State
/******************************************************************************/
let template;
const lightStaticAssets = {};
const darkStaticAssets = {};
/***************************************************************/
// Helper
/***************************************************************/
function createTemplate(app) {
    const publicURL = app.get('public');
    const indexHtmlURL = path_1.default.join(publicURL, 'index.html');
    try {
        template = fs_1.default
            .readFileSync(indexHtmlURL, 'utf-8');
    }
    catch (err) {
        console.error('could not create index.html template:', err.message);
        process.exit();
    }
}
/**
 * HACK FIXME
 * There's gotta be a way to do this with webpack rather than rebuilding it
 * here.
 */
function createStaticAssets(app) {
    const publicUrl = app.get('public');
    const assetsBundledByWebpack = fs_1.default
        .readdirSync(publicUrl)
        .filter(file => file.includes('@'));
    for (const assetPath of assetsBundledByWebpack) {
        const [assetName, assetShade] = assetPath.split(/-|@/);
        const isLightAsset = assetShade && assetShade.includes('light');
        const isDarkAsset = assetShade && assetShade.includes('dark');
        const isEither = !isLightAsset && !isDarkAsset;
        if (isLightAsset || isEither)
            lightStaticAssets[assetName] = '/' + assetPath;
        if (isDarkAsset || isEither)
            darkStaticAssets[assetName] = '/' + assetPath;
    }
}
function renderTemplate(reactComponent, sheet, json = null) {
    const reactMarkup = server_1.renderToString(react_1.default.createElement(styled_components_1.StyleSheetManager, { sheet: sheet.instance }, reactComponent));
    const styleTags = sheet.getStyleTags();
    const jsonStr = '<script id="global-mechanic-ssr" type="application/json">' +
        JSON.stringify(json) +
        '</script>';
    return template
        .replace('<!-- #STYLE-INJECTION -->', styleTags)
        .replace('<!-- #JSON-INJECTION -->', jsonStr)
        .replace('<!-- #REACT-INJECTION -->', reactMarkup);
}
/***************************************************************/
// Setup
/***************************************************************/
function default_1(app) {
    // Create Template
    createTemplate(app);
    createStaticAssets(app);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return (req, res, next) => {
        // FIXME: I feel like this is pretty hacky/bad logic
        // if we're requesting a file that's served statically, the
        // req.url will have an extension, so we skip this middleware.
        if (path_1.default.extname(req.url))
            return next();
        const context = {};
        const sheet = new styled_components_1.ServerStyleSheet();
        try {
            const pageData = page_data_1.getPageData(req.url);
            const html = renderTemplate(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
                react_1.default.createElement(website_1.default, { initialPageData: pageData, lightStaticAssets: lightStaticAssets, darkStaticAssets: darkStaticAssets })), sheet, pageData);
            if (context.url)
                req.redirect(301, context.url);
            else
                res.send(html);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            sheet.seal();
        }
    };
}
exports.default = default_1;
