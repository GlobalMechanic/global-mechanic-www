"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IS_DEV = process.env.NODE_ENV === 'development';
exports.IS_DEV = IS_DEV;
const IS_SERVER = typeof window === 'undefined';
const HOST = IS_SERVER
    ? ''
    : IS_DEV
        ? origin.replace(/:\d+$/, ':' + process.env.DEV_SERVER_PORT)
        : origin;
exports.HOST = HOST;
/***************************************************************/
// Exports
/***************************************************************/
exports.default = HOST;