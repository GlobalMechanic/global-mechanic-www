import video from './video'
import portfolio from './portfolio'

export default function() {

  const app = this

  app.configure(video)
  app.configure(portfolio)

}
