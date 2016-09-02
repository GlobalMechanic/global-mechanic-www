import React from 'react'

export default function Page({className, children, ...other}) {
  const classes = 'page' + (className ? ' ' + className : '')
  return <div {...other} className={classes}>{children}</div>
}
