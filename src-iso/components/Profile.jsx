import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
import { urlify } from 'modules/helper'
/* global HOST */

export function getFullName(staff) {
  const { name } = staff
  const { first, last } = name
  return `${(first || '' )} ${(last || '')}`.trim()
}

const ProfileMainStyle = {
  top: 0,
  left: 0
}

export default function Profile({ isFeatured, hasFeatured, style, item, path, getImage, getWriteup }) {

  const fullName = getFullName(item)
  const urlFullName = urlify(fullName)

  const classes = classNames('profile', {
    'profile-featured': isFeatured,
    'profile-hidden': hasFeatured && !isFeatured
  })

  const mainStyle = isFeatured ? ProfileMainStyle : style

  const imageStyle = {
    width: isFeatured ? null : style.width,
    height: isFeatured ? null : style.height,
    backgroundImage: `url(${HOST}/assets/file/${getImage(item)})`
  }

  return <div className={classes} style={mainStyle} >
    <div className='profile-image' style={imageStyle} onClick={() => browserHistory.push(`/${path}${urlFullName}`)}/>
    <div className='profile-writeup' >
      <h1>{fullName}</h1>
      <p>{getWriteup(item)}</p>
    </div>
  </div>

}

Profile.propTypes = {
  getImage: PropTypes.func.isRequired,
  getWriteup: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
}
