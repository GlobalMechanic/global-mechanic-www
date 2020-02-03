"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const provider_1 = __importStar(require("./provider"));
exports.PageDataProvider = provider_1.default;
exports.PageDataContext = provider_1.PageDataContext;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = provider_1.default;
