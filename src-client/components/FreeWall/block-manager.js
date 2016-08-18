/******************************************************************************/
// Dependencies
/******************************************************************************/
import BlockData from './block-data'

/******************************************************************************/
// Private Danglers
/******************************************************************************/
function ensure_each_child_has_blockdata() {
  this.wall.props.children.forEach((child,i) => {
    const key = child.key || i

    if (key in this.blocks === false)
      this.blocks[key] = new BlockData(child)
  })
}

function fit_blocks_in_screen() {
  
}

function update_component() {
  this.wall.setState({
    blocks: this.wall.props.children.map((kid,i) => this.blocks[kid.key || i])
  })
}

/******************************************************************************/
// Exports
/******************************************************************************/
export default class BlockManager {

  constructor(wall) {

    this.wall = wall
    this.blocks = {}
    this.calculate = this.calculate.bind(this)

  }

  calculate() {
    if (!this.wall.props.children)
      return

    ensure_each_child_has_blockdata.call(this)
    fit_blocks_in_screen.call(this)
    update_component.call(this)
  }

}
