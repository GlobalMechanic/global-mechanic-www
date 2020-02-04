"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_service_data_to_pages_1 = __importDefault(require("../util/convert-service-data-to-pages"));
const legacy_page_path_match_1 = __importDefault(require("../../client/util/legacy-page-path-match"));
/***************************************************************/
// Module State
/***************************************************************/
let pageData = [];
/***************************************************************/
// Helper
/***************************************************************/
async function find(app, serviceName) {
    const service = app.service(serviceName);
    if (!service)
        return [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore Feathers old type definitions are completely fucked
    const records = await service.find({});
    return records;
}
function getPageData(url) {
    if (!url)
        return [...pageData];
    const breadcrumbs = url
        .split('/')
        .filter(word => !!word); // not empty
    const path = breadcrumbs[breadcrumbs.length - 1] || '';
    return pageData.filter(legacy_page_path_match_1.default(path));
}
exports.getPageData = getPageData;
async function updatePageData(app) {
    const serviceData = {
        people: await find(app, 'people'),
        showcases: await find(app, 'showcases'),
        products: await find(app, 'products')
    };
    pageData = convert_service_data_to_pages_1.default(serviceData);
    console.log('page data updated:', pageData.length, 'pages');
}
exports.updatePageData = updatePageData;
/***************************************************************/
// Main
/***************************************************************/
function default_1(_req, res) {
    res.json(pageData);
}
exports.default = default_1;
