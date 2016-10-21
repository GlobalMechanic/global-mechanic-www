import feathers from 'feathers'
import configuration from 'feathers-configuration'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest'
import fs from 'fs'

import path from 'path'
import cors from 'cors'
import compress from 'compression'
import bodyParser from 'body-parser'
import { static as serveStatic } from 'feathers'
import fallback from 'express-history-api-fallback'

import middleware from './middleware'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from 'components/routes'

/******************************************************************************/
// Config
/******************************************************************************/

const app = feathers()
const configURL = path.resolve(__dirname, '..')

app.configure(configuration(configURL))

const publicURL = app.get('public')

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use('/assets', serveStatic(publicURL + '/assets'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .configure(hooks())
  .configure(rest())

  .get('*', (req, res) => {

    match({ routes, location: req.url }, (err, redirect, props) => {
      const reactHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderTemplate(reactHtml))
    })

  })

  .configure(middleware)


  .use(fallback('index.html', { publicURL }))

/******************************************************************************/
// Helper
/******************************************************************************/

const html = fs.readFileSync(path.join(publicURL, 'index.html'), 'utf-8').split('<main/>')

function renderTemplate(reactHtml) {
  return `${html[0]}<main>${reactHtml}</main>${html[1]}`
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default app
