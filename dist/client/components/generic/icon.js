"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Main
/***************************************************************/
const Icon = styled_components_1.default.span `

    display: inline-block;
    width: 1.25em;
    height: 1em;

    flex: 0 0 auto;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(p) => p.image});
`;
/***************************************************************/
// Exports 
/***************************************************************/
exports.default = Icon;
