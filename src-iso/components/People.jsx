import React, { PropTypes, Component } from 'react'

import { Grid, Layout, Block } from 'components/Grid'
import { urlify, getFullName, navigate } from 'modules/helper'
import { people } from 'modules/data'

import classNames from 'classnames'

/* global HOST */

const DirectorFirst = ['directorData', 'staffData']
const StaffFirst = DirectorFirst.slice().reverse()

function PersonProfile({person, className, ...other}, { director }) {

  const [ primary, secondary ] = director ? DirectorFirst : StaffFirst

  const name = person ? getFullName(person) : null

  const essay = person ?
      person[primary] && person[primary].essay ? person[primary].essay :
      person[secondary] && person[secondary].essay ? person[secondary].essay : null
    : null

  const portraitId = person ?
      person[primary] && person[primary].portrait ? person[primary].portrait :
      person[secondary] && person[secondary].portrait ? person[secondary].portrait : null
    : null

  const portrait = portraitId ? `${HOST}/assets/file/${portraitId}` : null
  const classes = classNames('profile', className)

  return <div {...other} className={classes}>
    <img className='profile-image' src={portrait} />
    <div className='profile-detail'>
      <h1>{name}</h1>
      <p>{essay}</p>
    </div>

  </div>

}
PersonProfile.contextTypes = {
  director: PropTypes.bool
}

function PersonBlock({ item, ...other }, { director, path }) {

  const [ primary, secondary ] = director ? DirectorFirst : StaffFirst

  const portraitId = item ?
      item[primary] && item[primary].portrait ? item[primary].portrait :
      item[secondary] && item[secondary].portrait ? item[secondary].portrait : null
    : null

  const name = getFullName(item)
  const id = urlify(name)
  const onClick = () => navigate(`${path}/${id}`)

  return <Block imageId={portraitId} onClick={onClick} {...other} />
}
PersonBlock.contextTypes = {
  director: PropTypes.bool,
  path: PropTypes.string.isRequired
}

export default class People extends Component {

  state = {
    people: [],
    featuredPerson: null
  }

  static propTypes = {
    featured: PropTypes.string,
    path: PropTypes.string.isRequired,
    director: PropTypes.bool.isRequired
  }

  static childContextTypes = {
    path: PropTypes.string,
    director: PropTypes.bool
  }

  getChildContext() {
    const { path, director } = this.props

    return {
      path,
      director
    }

  }

  setFeaturedPerson({featured}) {

    const { people } = this.state
    const featuredPerson = featured ? people.filter(p => urlify(getFullName(p)) === featured)[0] : null
    if (featuredPerson)
      this.setState({ featuredPerson })

  }

  componentDidMount() {

    const data = this.props.director ? DirectorFirst[0] : StaffFirst[0]

    people.then(arr => {
      const people = arr.filter(p => p && p[data] && p[data].showOnWebsite)
      this.setState({ people })
      this.setFeaturedPerson(this.props)
    })
  }

  componentWillReceiveProps(props) {
    this.setFeaturedPerson(props)
  }

  size = () => {
    return { width: 5, height: 4 }
  }

  render() {
    const { people, featuredPerson } = this.state
    const { featured, size, layout } = this.props

    this.layout = this.layout || (layout || new Layout(50, true))
    const gridClasses = classNames({hidden: featured})
    const profileClasses = classNames({hidden: !featured})

    return <div>
      <PersonProfile person={featuredPerson} className={profileClasses}/>
      <Grid id='staff-wall' component={PersonBlock} items={people}
        layout={layout} sizeFunc={size || this.size} className={gridClasses} />
    </div>
  }
}
