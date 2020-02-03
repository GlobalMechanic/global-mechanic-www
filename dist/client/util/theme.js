"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************/
// Main
/***************************************************************/
const light = {
    name: 'light',
    colors: {
        bg: 'white',
        fg: 'black',
        accent: 'rgba(0,0,0, 0.125)'
    }
};
const dark = {
    name: 'dark',
    colors: {
        bg: 'black',
        fg: 'white',
        accent: 'rgba(255,255,255, 0.125)'
    }
};
const themes = {
    light,
    dark
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = themes;
