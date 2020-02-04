import { PageData } from '../root-components/page-data-provider'

/***************************************************************/
// Types
/***************************************************************/

type PathPredicate = (
    fromPage: PageData,
    index: number,
    arr: PageData[]
) => boolean

/***************************************************************/
// Main
/***************************************************************/

/**
 * Old showcases used underscores, new pages uses dashes.
 * This method should reduce the amount of missing pages when clients
 * are clicking old links.
 */
const legacyPagePathMatch = (pagePath: string): PathPredicate => {

    const pagePathLegacy = pagePath.replace(/_/g, '-')

    return page =>
        pagePath === page.path || pagePathLegacy === page.path
}

/***************************************************************/
// Exports
/***************************************************************/

export default legacyPagePathMatch