import { NotFound } from 'feathers-errors'

export default function() {

  return function(req,res,next) {
    next(new NotFound('Page not found'))
  }

}
