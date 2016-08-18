export default class BlockManager {

  constructor(wall) {
    this.wall = wall
    this.apply = this.apply.bind(this)
  }

  apply() {
    console.log('applied')
  }

}
