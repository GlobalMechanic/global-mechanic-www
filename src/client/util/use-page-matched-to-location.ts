import { useContext } from 'react'
import { PageDataContext, MenuPageData, ContentPageData } from '../root-components/page-data-provider'

import legacyPagePathMatch from './legacy-page-path-match'
import useEndLocationPath from './use-end-location-path'

/***************************************************************/
// Main
/***************************************************************/

const usePageMatchedToLocation = (
    pagePath = useEndLocationPath(),
    pages = useContext(PageDataContext)
): void | MenuPageData | ContentPageData => {

    const pagePathMatcher = legacyPagePathMatch(pagePath)

    const page = pages.find(pagePathMatcher) as ContentPageData | MenuPageData | void
    return page
}

/***************************************************************/
// Exports
/***************************************************************/


export default usePageMatchedToLocation