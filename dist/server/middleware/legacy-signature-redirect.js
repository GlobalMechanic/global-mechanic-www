"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/***************************************************************/
// Modules State
/***************************************************************/
let legacySignaturePath;
function findLegacySiganturePath(app) {
    const PUBLIC_URL = app.get('public');
    const publicNames = fs_1.default.readdirSync(PUBLIC_URL);
    for (const publicName of publicNames)
        if (publicName.includes('signature'))
            legacySignaturePath = '/' + publicName;
}
/***************************************************************/
// Exports
/***************************************************************/
// eslint-disable-next-line
function default_1(app) {
    findLegacySiganturePath(app);
    return function (_req, res) {
        res.redirect(302, legacySignaturePath);
    };
}
exports.default = default_1;
