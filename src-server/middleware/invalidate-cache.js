import { invalidate } from 'modules/gm-vimeo'

export default function () {

  return function(req, res) {
    invalidate()
    res.send('<h3 style="font-family: sans-serif;">Vimeo Cache Invalidated</h3>')
  }
}
