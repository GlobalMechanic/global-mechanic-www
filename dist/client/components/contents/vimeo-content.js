"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const content_1 = __importDefault(require("./content"));
/***************************************************************/
// Main
/***************************************************************/
const VimeoContent = (props) => {
    const { content, ...rest } = props;
    return react_1.default.createElement(content_1.default, Object.assign({ content: content }, rest),
        react_1.default.createElement("iframe", { src: `https://player.vimeo.com/video/${content.vimeoId}`, frameBorder: 0, allow: 'autoplay; fullscreen', allowFullScreen: true }));
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = VimeoContent;
