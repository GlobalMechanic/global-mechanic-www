import errors from 'feathers-errors'

export default function() {

  return function(req,res,next) {

    console.log(req, res, next)
    res.redirect('/')
  }

}
