const randomHex = () => '#'+Math.floor(Math.random()*16777215).toString(16)
const DefaultDimension = 2

export default class CellData {

  constructor(options) {
    let { content, x, y, width, height, color } = options

    this.content = content
    this.x = x || 0
    this.y = y || 0
    this.targetWidth = width || DefaultDimension
    this.targetHeight = height || DefaultDimension
    this.color = color || randomHex()

  }

}
