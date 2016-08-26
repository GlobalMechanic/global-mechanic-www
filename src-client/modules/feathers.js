import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import $ from 'jquery'

const host = 'http://192.168.1.158:3030'
const config = rest(host).jquery($)
const app = feathers().configure(config)

export default app
