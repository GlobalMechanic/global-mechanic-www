import React from 'react'

export default function TitleText({children, className, mini, ...other}) {
  let classes = 'body' + (className ? ' ' + className : '')

  if (mini)
    classes += ' mini'

  return <p className={classes} {...other}>{children}</p>
}
