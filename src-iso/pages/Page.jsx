import React from 'react'
import classNames from 'classnames'

export default function Page ({className, id, pageRef, style, children}) {

  const classes = classNames(className, 'page')

  return <div id={id} className={classes} ref={pageRef} style={style}>
    {children}
  </div>

}
