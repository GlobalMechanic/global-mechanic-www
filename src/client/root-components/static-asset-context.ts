import { createContext, useContext } from 'react'

/***************************************************************/
// Types
/***************************************************************/

interface StaticAssets {
    [key: string]: string
}

/***************************************************************/
// Components
/***************************************************************/

const StaticAssetContext = createContext<StaticAssets>({})

/***************************************************************/
// Hooks
/***************************************************************/

const useStaticAssets = (): StaticAssets =>
    useContext(StaticAssetContext)

/***************************************************************/
// Exports
/***************************************************************/

export default StaticAssetContext

export {
    StaticAssetContext,
    StaticAssets,
    useStaticAssets
}