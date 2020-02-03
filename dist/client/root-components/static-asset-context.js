"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/***************************************************************/
// Components
/***************************************************************/
const StaticAssetContext = react_1.createContext({});
exports.StaticAssetContext = StaticAssetContext;
/***************************************************************/
// Hooks
/***************************************************************/
const useStaticAssets = () => react_1.useContext(StaticAssetContext);
exports.useStaticAssets = useStaticAssets;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = StaticAssetContext;
