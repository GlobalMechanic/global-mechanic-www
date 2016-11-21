import React from 'react'
import classNames from 'classnames'

const Points = [
  'M72.1', '11.7H27.9L5.8', '50l22.1', '38.3h44.2L94.2', '50L72.1','11.7z M50',
  '65.6c-8.6','0-15.6-7-15.6-15.6 c0-8.6','7-15.6','15.6-15.6c8.6','0','15.6',
  '7','15.6','15.6C65.6','58.6','58.6','65.6','50','65.6z'
]

export default function Nut({className, ...other}) {

  const classes = classNames('nut', className)
  return <svg viewBox='5 10 90 80' className={classes} {...other}>
    <path d={Points}/>
  </svg>
}
