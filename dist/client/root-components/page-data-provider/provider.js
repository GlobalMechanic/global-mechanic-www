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
const fetch_page_data_1 = __importDefault(require("./fetch-page-data"));
/***************************************************************/
// Data
/***************************************************************/
const PageDataContext = react_1.createContext([]);
exports.PageDataContext = PageDataContext;
/***************************************************************/
// Component
/***************************************************************/
const PageDataProvider = (props) => {
    const { initialPageData = [], children } = props;
    const [pages, setPages] = react_1.useState(initialPageData);
    react_1.useEffect(() => {
        fetch_page_data_1.default().then(setPages);
    }, []);
    return react_1.default.createElement(PageDataContext.Provider, { value: pages }, children);
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = PageDataProvider;
