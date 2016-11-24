import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import fetch from 'isomorphic-fetch'

/* global HOST */

/******************************************************************************/
// Config
/******************************************************************************/

const config = rest(HOST).fetch(fetch)

const client = feathers().configure(config)

const find = service => client.service(`assets/${service}`).find()

export const people = find('people')
export const products = find('products')
export const showcases = find('showcases')
