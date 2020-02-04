"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("normalize.css");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const assets_1 = require("./assets");
const host_1 = require("./util/host");
/***************************************************************/
// Helper
/***************************************************************/
function getPageDataFromSSRRenderedJsonTag() {
    try {
        const jsonTag = document.getElementById('global-mechanic-ssr');
        const jsonStr = jsonTag && jsonTag.innerText;
        const json = jsonStr && JSON.parse(jsonStr);
        return json || [];
    }
    catch (err) {
        if (host_1.IS_DEV)
            console.error('could not parse json tag', err);
        return [];
    }
}
/***************************************************************/
// Execute
/***************************************************************/
window.onload = async function () {
    const React = await Promise.resolve().then(() => __importStar(require('react')));
    const { hydrate } = await Promise.resolve().then(() => __importStar(require('react-dom')));
    const { BrowserRouter: Router } = await Promise.resolve().then(() => __importStar(require('react-router-dom')));
    const { default: Website } = await Promise.resolve().then(() => __importStar(require('./root-components')));
    hydrate(React.createElement(Router, null,
        React.createElement(Website, { initialPageData: getPageDataFromSSRRenderedJsonTag(), lightStaticAssets: assets_1.light, darkStaticAssets: assets_1.dark })), document.getElementById('global-mechanic-www'));
};
