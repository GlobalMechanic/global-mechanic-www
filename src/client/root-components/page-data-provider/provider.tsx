import React, { ReactElement, useEffect, useState, createContext } from 'react'
import fetchServiceData from './fetch-service-data'
import convertServiceDataToPages from './convert-service-data-to-pages'

import { PageData } from './types'

/***************************************************************/
// Types
/***************************************************************/

interface PageDataProviderProps {
    initialPageData?: PageData[]
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

    const { initialPageData = [], children } = props

    const [pages, setPages] = useState(initialPageData)

    useEffect(() => {
        fetchServiceData()
            .then(convertServiceDataToPages)
            .then(setPages)
    }, [])

    return <PageDataContext.Provider value={pages}>
        {children}
    </PageDataContext.Provider >
}

/***************************************************************/
// Exports
/***************************************************************/

export default PageDataProvider

export {
    PageDataContext
}