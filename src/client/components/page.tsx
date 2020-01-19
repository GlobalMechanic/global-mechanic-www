import React, { ReactElement } from 'react'
import { PageData } from '../root-components/page-data-provider'

/***************************************************************/
// Props
/***************************************************************/

interface PageProps {
    page: PageData
}

/***************************************************************/
// Main
/***************************************************************/

const Page = (props: PageProps): ReactElement => {

    const { page } = props

    return <div>
        <b>{page.name}</b> Page
    </div>
}

/***************************************************************/
// Exports
/***************************************************************/

export default Page

export {
    PageProps
}