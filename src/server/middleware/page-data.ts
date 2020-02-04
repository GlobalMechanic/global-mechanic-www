
import { PageData } from '../../client/root-components/page-data-provider'
import { Request, Response } from 'express'
import { WebsiteApplication } from '../types'
import convertServiceDataToPageData, {
    PersonRecord,
    ProductRecord,
    ShowcaseRecord
} from '../util/convert-service-data-to-pages'
import legacyPagePathMatch from '../../client/util/legacy-page-path-match'

/***************************************************************/
// Module State
/***************************************************************/

let pageData: PageData[] = []

/***************************************************************/
// Helper
/***************************************************************/

async function find<T>(app: WebsiteApplication, serviceName: string): Promise<T[]> {

    const service = app.service<T>(serviceName)
    if (!service)
        return []

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore Feathers old type definitions are completely fucked
    const records = await service.find({}) as T[]
    return records
}

function getPageData(url?: string): PageData[] {

    if (!url)
        return [...pageData]

    const breadcrumbs = url
        .split('/')
        .filter(word => !!word) // not empty

    const path = breadcrumbs[breadcrumbs.length - 1] || ''

    return pageData.filter(legacyPagePathMatch(path))
}

async function updatePageData(app: WebsiteApplication): Promise<void> {

    const serviceData = {
        people: await find<PersonRecord>(app, 'people'),
        showcases: await find<ShowcaseRecord>(app, 'showcases'),
        products: await find<ProductRecord>(app, 'products')
    }

    pageData = convertServiceDataToPageData(serviceData)
    console.log('page data updated:', pageData.length, 'pages')
}

/***************************************************************/
// Main
/***************************************************************/

export default function (_req: Request, res: Response): void {
    res.json(pageData)
}

export {
    getPageData,
    updatePageData
}