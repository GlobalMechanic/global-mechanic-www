
const IS_DEV = process.env.NODE_ENV === 'development'

const IS_SERVER = typeof window === 'undefined'

const HOST = IS_SERVER
    ? ''
    : IS_DEV
        ? origin.replace(/:\d+$/, ':' + process.env.DEV_SERVER_PORT)
        : origin

/***************************************************************/
// Exports
/***************************************************************/

export default HOST

export {
    HOST, IS_DEV
}