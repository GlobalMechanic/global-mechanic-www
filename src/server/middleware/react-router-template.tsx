import path from 'path'
import fs from 'fs'

import React, { ReactElement } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Website from '../../client/root-components/website'

import { WebsiteApplication } from '../types'
import { getPageData } from './page-data'

/******************************************************************************/
// Module State
/******************************************************************************/

let template: string

const lightStaticAssets: { [key: string]: string } = {}

const darkStaticAssets: { [key: string]: string } = {}

/***************************************************************/
// Helper
/***************************************************************/

function createTemplate(app: WebsiteApplication): void {
    const publicURL = app.get('public')
    const indexHtmlURL = path.join(publicURL, 'index.html')

    try {

        template = fs
            .readFileSync(indexHtmlURL, 'utf-8')

    } catch (err) {

        console.error(
            'could not create index.html template:',
            err.message
        )

        process.exit()
    }
}

/**
 * HACK FIXME
 * There's gotta be a way to do this with webpack rather than rebuilding it
 * here.
 */
function createStaticAssets(app: WebsiteApplication): void {

    const publicUrl = app.get('public')

    const assetsBundledByWebpack = fs
        .readdirSync(publicUrl)
        .filter(file => file.includes('@'))

    for (const assetPath of assetsBundledByWebpack) {

        const assetStrings = assetPath.split(/-|@/)
        const assetName = assetStrings.find(str =>
            str !== 'signature' &&
            str !== 'light' &&
            str !== 'dark'
        )

        const isLightAsset = assetStrings.includes('light')
        const isDarkAsset = assetStrings.includes('dark')
        const isEither = !isLightAsset && !isDarkAsset

        if (assetName && (isLightAsset || isEither))
            lightStaticAssets[assetName] = '/' + assetPath

        if (assetName && (isDarkAsset || isEither))
            darkStaticAssets[assetName] = '/' + assetPath
    }

}

function renderTemplate(
    reactComponent: ReactElement,
    sheet: ServerStyleSheet,
    json: unknown = null
): string {

    const reactMarkup = renderToString(
        <StyleSheetManager sheet={sheet.instance}>
            {reactComponent}
        </StyleSheetManager>
    )

    const styleTags = sheet.getStyleTags()

    const jsonStr = '<script id="global-mechanic-ssr" type="application/json">' +
        JSON.stringify(json) +
        '</script>'

    return template
        .replace('<!-- #STYLE-INJECTION -->', styleTags)
        .replace('<!-- #JSON-INJECTION -->', jsonStr)
        .replace('<!-- #REACT-INJECTION -->', reactMarkup)
}

/***************************************************************/
// Setup
/***************************************************************/

export default function (app: WebsiteApplication): unknown {

    // Create Template
    createTemplate(app)
    createStaticAssets(app)

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return (req, res, next) => {

        // FIXME: I feel like this is pretty hacky/bad logic
        // if we're requesting a file that's served statically, the
        // req.url will have an extension, so we skip this middleware.
        if (path.extname(req.url))
            return next()

        const context: { url?: string } = {}

        const sheet = new ServerStyleSheet()

        try {

            const pageData = getPageData(req.url)

            const html = renderTemplate(
                <StaticRouter location={req.url} context={context}>
                    <Website
                        initialPageData={pageData}
                        lightStaticAssets={lightStaticAssets}
                        darkStaticAssets={darkStaticAssets}
                    />
                </StaticRouter>,
                sheet,
                pageData
            )

            if (context.url)
                req.redirect(301, context.url)
            else
                res.send(html)

        } catch (err) {
            console.error(err)
        } finally {
            sheet.seal()
        }
    }
}
