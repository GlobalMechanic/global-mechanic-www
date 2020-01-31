
const IS_DEV = process.env.NODE_ENV === 'development'

const HOST = IS_DEV
    ? origin.replace(/:\d+$/, ':' + process.env.DEV_SERVER_PORT)
    : origin

/***************************************************************/
// Exports
/***************************************************************/

export default HOST

export {
    HOST, IS_DEV
}