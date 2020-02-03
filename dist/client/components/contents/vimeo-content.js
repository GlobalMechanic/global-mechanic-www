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
const styled_components_1 = __importDefault(require("styled-components"));
const css_1 = require("../../util/css");
const use_aspect_ratio_height_style_1 = __importDefault(require("../../util/use-aspect-ratio-height-style"));
/***************************************************************/
// Main
/***************************************************************/
const VimeoContent = styled_components_1.default((props) => {
    const { content, ...rest } = props;
    const ref = react_1.createRef();
    const style = use_aspect_ratio_height_style_1.default(16 / 9, ref);
    return react_1.default.createElement("div", Object.assign({ ref: ref, style: style }, rest),
        react_1.default.createElement("iframe", { src: `https://player.vimeo.com/video/${content.vimeoId}`, frameBorder: 0, allow: 'autoplay; fullscreen', allowFullScreen: true }));
}) `
    ${css_1.content}

    background-color: ${p => p.theme.colors.accent};

    iframe {
        width: 100%;
        height: 100%;
    }

`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = VimeoContent;
