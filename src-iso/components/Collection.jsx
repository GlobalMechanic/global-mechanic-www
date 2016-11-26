import { Component, PropTypes, createElement } from 'react'
import { people, showcases, products } from 'modules/data'

const COLLECTIONS = {
  people,
  showcases,
  products
}

export default class Collection extends Component {

  static propTypes = {
    service: PropTypes.oneOf(['people', 'showcases', 'products']),
    filter: PropTypes.func,
    component: PropTypes.func.isRequired
  }

  state = {
    documents: []
  }

  setDocuments(props)  {

    const { service, filter } = props

    const collection = COLLECTIONS[service]

    collection
    .then(documents => {

      if (filter)
        documents = documents.filter(filter)

      this.setState({
        documents
      })
    })
  }

  componentDidMount() {
    this.setDocuments(this.props)
  }

  componentWillReceiveProps(next) {
    this.setDocuments(next)
  }

  render() {

    const { documents } = this.state
    const { component, filter, service, children, ...other } = this.props //eslint-disable-line no-unused-vars

    return createElement(component, { documents, ...other}, children)
  }
}
