import people from './people'
import products from './products'
import showcases from './showcases'

import { WebsiteApplication } from '../types'

/***************************************************************/
// Exports
/***************************************************************/

export default function (
    this: WebsiteApplication
): void {

    const app = this

    app.configure(people)
    app.configure(products)
    app.configure(showcases)

}
