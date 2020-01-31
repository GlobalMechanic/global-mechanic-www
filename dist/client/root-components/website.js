"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = require("styled-components");
const page_data_provider_1 = __importDefault(require("./page-data-provider"));
const page_routes_1 = __importDefault(require("./page-routes"));
const global_style_1 = __importDefault(require("./global-style"));
const page_container_1 = __importDefault(require("./page-container"));
const top_bar_1 = __importDefault(require("./top-bar"));
const Website = (props) => {
    const { theme, initialPageData, staticAssets } = props;
    return react_1.default.createElement(page_data_provider_1.default, { initialPageData: initialPageData },
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
            react_1.default.createElement(global_style_1.default, null),
            react_1.default.createElement(page_container_1.default, null,
                react_1.default.createElement(top_bar_1.default, { staticAssets: staticAssets }),
                react_1.default.createElement(page_routes_1.default, { staticAssets: staticAssets }))));
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = Website;
