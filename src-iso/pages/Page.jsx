import React from 'react'
import classNames from 'classnames'

export default function Page({className, children, ...other}) {

  const classes = classNames(className, 'page')

  return <div className={classes} {...other}>
    {children}
  </div>

}
