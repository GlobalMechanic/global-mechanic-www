"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const generic_1 = require("../components/generic");
const static_asset_context_1 = require("./static-asset-context");
/***************************************************************/
// Main
/***************************************************************/
const TopBar = styled_components_1.default((props) => {
    const { navIconTo, ...rest } = props;
    const staticAssets = static_asset_context_1.useStaticAssets();
    // const location = useLocation()
    // const atNav = location.pathname === navIconTo
    return react_1.default.createElement("div", Object.assign({}, rest),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
            react_1.default.createElement(generic_1.Icon, { image: staticAssets.nut }),
            react_1.default.createElement("h2", null, "Global Mechanic")));
}) `

    display: flex;
    align-items: baseline;
    padding: 0.5em 0.75em;

    position: sticky;
    top: 0em;

    font-size: 1.25em;

    a:first-child {
        margin-right: auto;
        display: inherit;
        align-items: inherit;
    }

    a > h2 {
        margin: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        &:visited {
            color: inherit;
        }
    }
`;
/***************************************************************/
// Export Topbar
/***************************************************************/
exports.default = TopBar;
