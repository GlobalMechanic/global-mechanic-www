import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import fetch from 'isomorphic-fetch'
import { ServiceData } from './convert-service-data-to-pages'

/***************************************************************/
// Constants
/***************************************************************/

const IS_DEV = process.env.NODE_ENV === 'development'

const HOST = IS_DEV
    ? origin.replace(/:\d+$/, ':' + process.env.DEV_SERVER_PORT)
    : origin

const fetchServiceData = IS_DEV
    ? async function fetchServiceDataFromDevelopmentServer(): Promise<ServiceData> {

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
    : function fetchServiceDataFromSSRProvidedJsonTag(): ServiceData {

        console.error('fetchServiceDataFromSSRProvidedJsonTag is not yet implemented')

        return {
            people: [],
            products: [],
            showcases: []
        }
    }

/***************************************************************/
// Exports
/***************************************************************/

export default fetchServiceData
