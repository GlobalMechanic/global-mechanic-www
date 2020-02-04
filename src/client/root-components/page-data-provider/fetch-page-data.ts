import fetch from 'isomorphic-fetch'
import { HOST } from '../../util/host'
import { PageData } from './types'

/***************************************************************/
// Constants
/***************************************************************/

async function fetchPageData(): Promise<PageData[]> {

    const resp = await fetch(`${HOST}/data`)

    const data = await resp.json()

    return data as PageData[]
}


/***************************************************************/
// Exports
/***************************************************************/

export default fetchPageData
