"use strict";
/***************************************************************/
// Main
/***************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the first item in an array that passes the supplied predicate test, removing
 * that object from the array.
 * @param array
 * @param predicate
 */
function pluck(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (predicate(item)) {
            array.splice(i, 1);
            return item;
        }
    }
    return undefined;
}
/***************************************************************/
// Exports
/***************************************************************/
exports.default = pluck;
