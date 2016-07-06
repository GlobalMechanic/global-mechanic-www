
class Service {

}

////

export default function() {
  const app = this
  app.use('/vimeo', new Service())

  // const vimeoService = app.service('/vimeo')
  // vimeoService.before(beforeHooks)
  // vimeoService.after(aterHooks)
}

export { Service }
