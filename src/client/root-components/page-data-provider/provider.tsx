import React, { ReactElement, useEffect, useState, createContext } from 'react'
import fetchPageData from './fetch-page-data'

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
        fetchPageData().then(setPages)
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