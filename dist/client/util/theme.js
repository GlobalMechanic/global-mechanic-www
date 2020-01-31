"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************/
// Main
/***************************************************************/
const LightTheme = {
    colors: {
        bg: 'white',
        fg: 'black',
        accent: '#ddd'
    }
};
exports.LightTheme = LightTheme;
const DarkTheme = {
    ...LightTheme,
    colors: {
        bg: LightTheme.colors.fg,
        fg: LightTheme.colors.bg
    }
};
exports.DarkTheme = DarkTheme;
