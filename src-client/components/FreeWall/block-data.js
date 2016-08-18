/******************************************************************************/
// Dependencies
/******************************************************************************/

import Block, { DefaultWidth, DefaultHeight } from './Block'

/******************************************************************************/
// Exports
/******************************************************************************/

export default class BlockData {

  constructor(child) {

    const isBlock = is(child.type, Block)

    this.child = isBlock ? child.props.children : child
    this.width = isBlock && child.props ? child.props.width : DefaultWidth
    this.height = isBlock && child.props ? child.props.height : DefaultHeight
    this.x = 0
    this.y = 0

  }

}
