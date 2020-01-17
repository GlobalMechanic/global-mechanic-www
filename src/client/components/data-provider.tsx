import React, { ReactElement, useEffect, useState, createContext } from 'react'

import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import fetch from 'isomorphic-fetch'


/***************************************************************/
// Context
/***************************************************************/

const { origin } = window.location

// TODO find a better way to resolve the server in dev mode
const HOST = origin.replace(':5500', ':5000')

/***************************************************************/
// Types
/***************************************************************/

interface DataProviderProps {
    children: ReactElement
}

interface Data {
    people: object[]
    products: object[]
    showcases: object[]
}

/***************************************************************/
// Data
/***************************************************************/

const DataContext = createContext<Data>({
    people: [],
    products: [],
    showcases: []
})

/***************************************************************/
// Component
/***************************************************************/

const DataProvider = (props: DataProviderProps): ReactElement => {

    const [data, setData] = useState({
        people: [],
        products: [],
        showcases: []
    } as Data)

    useEffect(() => {

        const config = rest(HOST).fetch(fetch)

        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore old feathers client has typing bugs
        const client = feathers()
            .configure(config)

        Promise.all([
            client.service('people').find(),
            client.service('products').find(),
            client.service('showcases').find(),
        ]).then((data: [object[], object[], object[]]): void => {

            const [people, products, showcases] = data

            setData({
                people,
                products,
                showcases
            })
        })

    }, [])

    return <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider >
}

/***************************************************************/
// Exports
/***************************************************************/

export default DataProvider

export {
    DataProviderProps,
    DataContext
}