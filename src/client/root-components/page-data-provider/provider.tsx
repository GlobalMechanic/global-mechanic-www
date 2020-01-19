import React, { ReactElement, useEffect, useState, createContext } from 'react'
import fetchServiceData from './fetch-service-data'
import convertServiceDataToPages from './convert-service-data-to-pages'

import { PageData } from './types'

/***************************************************************/
// Types
/***************************************************************/

interface PageDataProviderProps {
    children: ReactElement
}

/***************************************************************/
// Data
/***************************************************************/

const PageDataContext = createContext<PageData[]>([])

/***************************************************************/
// Component
/***************************************************************/

const PageDataProvider = (props: PageDataProviderProps): ReactElement => {

    const [pages, setPages] = useState([] as PageData[])

    useEffect(() => {
        Promise.resolve(fetchServiceData())
            .then(serviceData => convertServiceDataToPages(serviceData))
            .then(pages => setPages(pages))
    }, [])

    return <PageDataContext.Provider value={pages}>
        {props.children}
    </PageDataContext.Provider >
}

/***************************************************************/
// Exports
/***************************************************************/

export default PageDataProvider

export {
    PageDataContext
}