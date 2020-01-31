"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const page_1 = __importDefault(require("./page"));
const page_data_provider_1 = require("../../root-components/page-data-provider");
const contents_1 = require("../contents");
const css_1 = require("../../util/css");
/***************************************************************/
// Background
/***************************************************************/
const fixed = styled_components_1.css `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -100;
`;
const BackgroundOverlay = styled_components_1.default.div `
    ${fixed}
    background-image: url(${(p) => p.staticImage});
`;
const BackgroundVideoContent = styled_components_1.default(contents_1.FileContent) `
    ${fixed}
    video {
        position: inherit;

        top: 50%;
        left: 50%;

        min-width: 100%;
        min-height: 100%;

        width: auto;
        height: auto;

        opacity: 0.75;

        transform: translate(-50%, -50%);
    }
    background-color: ${p => p.theme.colors.fg};
`;
const BackgroundTextContent = styled_components_1.default(contents_1.TextContent) `
    color: transparent;
    
    ${css_1.titleFont};
    font-size: 30vw;
    font-size: max(min(40vw, 40vh), 5em);
    
    max-width: calc(100vw - 1px);
    overflow: hidden;

    margin-top: -0.15em;

    span {
        display: block;
        height: 1em;
    }

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${p => p.theme.colors.bg};
`;
const BackgroundTextWriteup = styled_components_1.default(contents_1.TextContent) `
    color: ${p => p.theme.colors.bg};
    font-size: 1.75em;

    position: relative;

    max-width: 34em;
    margin-bottom: 4em;
`;
const SocialMediaLinks = styled_components_1.default.div `

    display: flex;
    position: fixed;
    bottom: 1em;

    height: 4em;

    align-items: baseline;
`;
const SocialMediaLink = styled_components_1.default.a.attrs(() => ({
    target: '_blank'
})) `
    display: block;
    width: 2em;
    height: 2em;
    margin-left: 0.5em;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(p) => p.image});
`;
/***************************************************************/
// Main
/***************************************************************/
const SplashPage = styled_components_1.default((props) => {
    const { page, staticAssets, ...rest } = props;
    const fgText = page.contents.find(content => content.type === 'text');
    const bgVideo = page.contents.find(content => content.type === 'file');
    const aboutUsForSplashPageOnlyVersion = react_1.useContext(page_data_provider_1.PageDataContext)
        .find(page => page.name.includes('About'));
    const writeupForSplashPageOnlyVersion = aboutUsForSplashPageOnlyVersion &&
        aboutUsForSplashPageOnlyVersion
            .contents
            .find(content => content.type === 'text');
    return react_1.default.createElement(page_1.default, Object.assign({ page: page }, rest),
        bgVideo
            ? react_1.default.createElement(BackgroundVideoContent, { content: bgVideo, description: null })
            : null,
        react_1.default.createElement(BackgroundOverlay, { staticImage: staticAssets.dots }),
        react_1.default.createElement(SocialMediaLinks, null,
            react_1.default.createElement(SocialMediaLink, { image: staticAssets.insta, href: 'https://www.instagram.com/globalmechanic/?hl=en' }),
            react_1.default.createElement(SocialMediaLink, { image: staticAssets.facebook, href: 'https://www.facebook.com/GlobalMechanicMedia/' }),
            react_1.default.createElement(SocialMediaLink, { image: staticAssets.vimeo, href: 'https://vimeo.com/globalmechanicmedia' }),
            react_1.default.createElement(SocialMediaLink, { image: staticAssets.twitter, href: 'https://twitter.com/globalmechanic?lang=en' })),
        fgText
            ? react_1.default.createElement(BackgroundTextContent, { content: fgText })
            : null,
        writeupForSplashPageOnlyVersion
            ? react_1.default.createElement(BackgroundTextWriteup, { content: writeupForSplashPageOnlyVersion })
            : null);
}) `
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = SplashPage;
