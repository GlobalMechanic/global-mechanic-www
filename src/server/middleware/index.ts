import handler from 'feathers-errors/handler'
import fileServe from './file-serve'
import reactRouterTemplate from './react-router-template'
import logging from './logging'

import { WebsiteApplication } from '../types'

/***************************************************************/
// Export
/***************************************************************/

export default function (this: WebsiteApplication): void {

    const app = this

    app.get('/file/:key', fileServe())

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(reactRouterTemplate(app))

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore feathers is waaaaay to dynamic for typescript, I think
    app.use(logging())
    app.use(handler())

}
