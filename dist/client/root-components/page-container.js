"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
/***************************************************************/
// Main
/***************************************************************/
const PageContainer = styled_components_1.default.div `
   display: flex;
   flex-direction: column;
   flex: 1 1 auto;
`;
/***************************************************************/
// Export Topbar
/***************************************************************/
exports.default = PageContainer;
