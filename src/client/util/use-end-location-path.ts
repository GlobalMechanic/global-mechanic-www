import { useLocation } from 'react-router-dom'

/***************************************************************/
// Helper Methods
/***************************************************************/

const useEndLocationPath = (fromLast = 0): string => {

    const location = useLocation()

    const breadcrumbs = location
        .pathname
        .split('/')
        .filter(word => !!word) // not empty

    return breadcrumbs[breadcrumbs.length - (fromLast + 1)] || ''
}

/***************************************************************/
// Exports
/***************************************************************/


export default useEndLocationPath