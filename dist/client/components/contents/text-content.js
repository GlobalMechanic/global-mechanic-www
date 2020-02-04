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
const markdown_1 = __importDefault(require("../generic/markdown"));
const css_1 = require("../../util/css");
/***************************************************************/
// Main
/***************************************************************/
const TextContent = styled_components_1.default((props) => {
    const { content, ...rest } = props;
    return react_1.default.createElement("div", Object.assign({}, rest), content.text.split('\n').map((line, i, arr) => react_1.default.createElement(react_1.Fragment, { key: i },
        react_1.default.createElement(markdown_1.default, null, line),
        i === arr.length - 1
            ? null
            : react_1.default.createElement("br", null))));
}) `

    ${css_1.content}

    padding: 1em;
`;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = TextContent;