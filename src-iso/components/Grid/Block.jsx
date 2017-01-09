import React from 'react'
import classNames from 'classnames'

import Image from '../Image'

export default function Block({ style, imageId, grayscale, className, onClick, children, onImageLoad, ...other }) {

  const blockClasses = classNames('block', className)
  const imageClasses = classNames('block-image', { clickable: onClick, grayscale})

  return <div className={blockClasses} style={style} {...other}>
    <Image className={imageClasses} imageId={imageId} onImageLoad={onImageLoad}>{children}</Image>
  </div>

}
