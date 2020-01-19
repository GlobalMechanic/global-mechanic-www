/***************************************************************/
// Main
/***************************************************************/


/**
 * Returns the first item in an array that passes the supplied predicate test, removing
 * that object from the array.
 * @param array 
 * @param predicate 
 */
function pluck<T>(array: T[], predicate: (t: T) => boolean): T | undefined {
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (predicate(item)) {
            array.splice(i, 1)
            return item
        }
    }

    return undefined
}

/***************************************************************/
// Exports
/***************************************************************/

export default pluck