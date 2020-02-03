"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const host_1 = __importDefault(require("./host"));
/***************************************************************/
// Main
/***************************************************************/
// TODO MOVE ME
async function fetchFileMetaData(fileId) {
    const URL = `${host_1.default}/file/${fileId}-meta`;
    try {
        const resp = await fetch(URL);
        let json = await resp.json();
        // HACK 
        // needs to be parsed twice, for some reason. 
        // Something is in src/server/middleware/file-serve.ts 
        json = JSON.parse(json);
        return json;
    }
    catch (err) {
        return null;
    }
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = fetchFileMetaData;
