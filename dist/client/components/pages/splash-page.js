"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const page_1 = __importDefault(require("./page"));
const contents_1 = require("../contents");
const static_asset_context_1 = require("../../root-components/static-asset-context");
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
const BackgroundOverlay = styled_components_1.default.span `
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
const BackgroundText = styled_components_1.default.h1 `
    color: transparent;
    margin: 0;

    font-size: 45vmin;
    
    overflow: hidden;
    max-width: 100vw;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${p => p.theme.colors.bg};
`;
/***************************************************************/
// Main
/***************************************************************/
const SplashPage = styled_components_1.default((props) => {
    const { page, ...rest } = props;
    const staticAssets = static_asset_context_1.useStaticAssets();
    const fgText = page.contents.find(content => content.type === 'text');
    const bgVideo = page.contents.find(content => content.type === 'file');
    return react_1.default.createElement(page_1.default, Object.assign({ page: page }, rest),
        bgVideo
            ? react_1.default.createElement(BackgroundVideoContent, { content: bgVideo, description: null })
            : null,
        react_1.default.createElement(BackgroundOverlay, { staticImage: staticAssets.dots }),
        fgText
            ? react_1.default.createElement(BackgroundText, null, fgText.text)
            : null);
}) `
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: auto;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = SplashPage;
