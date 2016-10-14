import React from 'react'
import Page from './Page'
import { browserHistory } from 'react-router'
import { Dropdown, Content, Portfolio } from '../components'
import { events, data } from '../modules/data-loader'

function pathified(str) {
  return str.toLowerCase().replace(/ /g, '_').replace(/&/g,'and')
}

function navigate(e, value) {
  browserHistory.push('/work/'+pathified(value.name))
}

export default class Work extends React.Component {

  constructor(props) {
    super(props)
    this.state = { portfolios: [] }
    this.setPortfolios = this.setPortfolios.bind(this)
  }

  setPortfolios(allPortfolios) {
    const portfolios = []

    for (const i in allPortfolios)
      portfolios.push(allPortfolios[i])

    this.setState({ portfolios })
  }

  componentDidMount() {
    events.on('portfolios-loaded', this.setPortfolios)
    if (data.portfolios)
      this.setPortfolios(data.portfolios)
  }

  componentWillUnmount() {
    events.removeListener('portfolios-loaded', this.setPortfolios)
  }

  setVideos(allVideos) {
    const id = this.props.portfolio.toString()
    const videos = []

    for (const i in allVideos) {
      const video = allVideos[i]
      if (video.portfolios.includes(id))
        videos.push(video)
    }

    this.setState({ videos })
  }

  render() {
    const { portfolios } = this.state
    const path = this.props.params.portfolio
    const publicPortfolios = portfolios.filter(port => port.scope === 'public' || port.id === '640648')
    const portfolio = portfolios.filter(port => pathified(port.name) === path)[0]

    const id = path + '-portfolio'

    return <Page id="work-page" {...this.props}>
      <Content id="work-content">
        <Dropdown title={ portfolio ? portfolio.name : '' } items={publicPortfolios} onSelection={navigate}/>
        { portfolio ? <Portfolio key={id} id={id} portfolio={portfolio.id} urlPrefix={`/work/${path}/`} /> : null }
        { this.props.children }
      </Content>
    </Page>
  }

}
