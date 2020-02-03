"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const generic_1 = require("../components/generic");
const static_asset_context_1 = require("./static-asset-context");
const Gradient = styled_components_1.default.div `
    background: linear-gradient(
        ${(p) => p.from},
        ${(p) => p.to}
    );
`;
/***************************************************************/
// Main
/***************************************************************/
const TopBar = styled_components_1.default((props) => {
    const { navIconTo, ...rest } = props;
    const staticAssets = static_asset_context_1.useStaticAssets();
    const location = react_router_dom_1.useLocation();
    const theme = react_1.useContext(styled_components_1.ThemeContext);
    const atNav = location.pathname === navIconTo;
    const atHome = location.pathname === '/';
    return react_1.default.createElement(Gradient, Object.assign({ from: atHome ? 'transparent' : theme.colors.bg, to: 'transparent' }, rest),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
            react_1.default.createElement(generic_1.Icon, { image: staticAssets.nut }),
            react_1.default.createElement("h2", null, "Global Mechanic")),
        react_1.default.createElement(react_router_dom_1.Link, { to: atNav ? '/' : navIconTo },
            react_1.default.createElement(generic_1.Icon, { image: atNav ? staticAssets.x : staticAssets.hamburger })));
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
