import * as vimeo from '../modules/gm-vimeo'
import matcher from '../modules/query-matcher'

/******************************************************************************/
// Service Class
/******************************************************************************/

class PortfolioService {

  get(id) {

    return vimeo
    .portfolios()
    .then(folios => {
      const folio = folios[id]

      if (folio)
        return folio

      throw new Error('Portfolio with id ' + id + ' does not exist.')
    })

  }

  find(params) {

    const query = params ? params.query : {}

    return vimeo
    .portfolios()
    .then(folios => {
      if (!query)
        return folios

      const filtered = {}

      for (let i in folios) {
        const folio = folios[i]
        if (matcher(query, folio))
          filtered[i] = folio
      }

      return filtered
    })
  }
}

/******************************************************************************/
// Hooks
/******************************************************************************/

const beforeHooks = {}
const afterHooks = {}

/******************************************************************************/
// Exports
/******************************************************************************/

export default function initialize() {
  const app = this

  app.use('/portfolios', new PortfolioService())

  const portfolioService = app.service('/portfolios')
  portfolioService.before(beforeHooks)
  portfolioService.after(afterHooks)
}

export { PortfolioService as Service }
