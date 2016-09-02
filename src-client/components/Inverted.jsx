import React from 'react'

export default function Inverted({children, className, ...other}) {

  const classes = 'inverse' + (className ? ' ' + className : '')

  return <div {...other} className={classes}>{children}</div>
}
