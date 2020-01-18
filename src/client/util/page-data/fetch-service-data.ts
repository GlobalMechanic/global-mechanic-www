import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import fetch from 'isomorphic-fetch'
import { ServiceData } from './convert-service-data-to-pages'

/***************************************************************/
// Constants
/***************************************************************/

// TODO find a better way to resolve the server in dev mode
const HOST = process.env.NODE_ENV === 'development'
    ? origin.replace(':5500', ':5000')
    : origin

/***************************************************************/
// Fetch Service Data
/***************************************************************/

async function fetchServiceData(): Promise<ServiceData> {

    const config = rest(HOST).fetch(fetch)

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore old feathers client has typing bugs
    const client = feathers().configure(config)

    const [people, products, showcases] = await Promise.all([
        client.service('people').find(),
        client.service('products').find(),
        client.service('showcases').find(),
    ])

    return {
        people,
        products,
        showcases
    }

}

/***************************************************************/
// Exports
/***************************************************************/

export default fetchServiceData
