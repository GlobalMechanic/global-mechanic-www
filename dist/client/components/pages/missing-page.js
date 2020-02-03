"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Helper Components
/***************************************************************/
const MissingPageStyle = styled_components_1.default.div `
    h2 { color: red; }
`;
/***************************************************************/
// Main
/***************************************************************/
const MissingPage = () => {
    return react_1.default.createElement(MissingPageStyle, null,
        react_1.default.createElement("h2", null, "Page Not Found!"));
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = MissingPage;
