"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const host_1 = require("../../util/host");
/***************************************************************/
// Constants
/***************************************************************/
async function fetchPageData() {
    const resp = await isomorphic_fetch_1.default(`${host_1.HOST}/data`);
    const data = await resp.json();
    return data;
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = fetchPageData;
