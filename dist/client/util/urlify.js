"use strict";
/***************************************************************/
// Helper
/***************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const urlFriendlyCharacters = /[a-z]|[0-9]|_| |-/;
function sanitize(input, sanitizer) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (sanitizer.test(char))
            output += char;
    }
    return output;
}
/***************************************************************/
// Main
/***************************************************************/
/**
 * Outputs a url friendly version of the input string.
 * @param input
 */
function urlify(input) {
    return sanitize(input.toLowerCase(), urlFriendlyCharacters)
        .replace(/\n/g, ' ')
        .replace(/ /g, '-')
        .replace(/--/g, '-')
        .replace(/--/g, '-') // twice, to handle cases where there an odd number of dashes in a row
        .replace(/^(-|_)/, '') // no dash or underscore at beginning
        .replace(/(-|_)$/, '') // no dash or underscore at end
        .trim();
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = urlify;
