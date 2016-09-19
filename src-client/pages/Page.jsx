import React from 'react'
import { events } from '../modules/data-loader'

export default function Page(props) {

  const { className, children, routes, ...other } = props
  const { path, ...backgroundProps } = routes[routes.length - 1] // eslint-disable-line no-unused-vars

  setTimeout(() => events.emit('background-style', backgroundProps), 100)

  const classes = className || 'page'
  return <div {...other} className={classes}>{children}</div>

}
