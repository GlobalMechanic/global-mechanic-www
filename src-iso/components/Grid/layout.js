import is from 'is-explicit'

import { floor, abs, round, max, Vector } from 'modules/math'

const LAYOUT_LOOP_BREAK = Symbol('layout-loop-break')

export class Coords {

  constructor(x=0, y=0, w=1, h=1) {
    this.pos = new Vector(x,y)
    this.dim = new Vector(w,h)
  }

  forEach(func) {
    for (let x = this.pos.x; x < this.pos.x + this.dim.x; x++ )
      for (let y = this.pos.y; y < this.pos.y + this.dim.y; y++ )
        if (func(new Vector(x,y)) === LAYOUT_LOOP_BREAK)
          break
  }

  toString() {
    return `${this.pos} ${this.dim}`
  }

}

class Cells {

  constructor(limitX = Infinity, limitY = Infinity) {
    this.limits = new Vector(limitX, limitY)
    this.max = Vector.zero
    this.filled = new Map()
  }

  tryFill(block) {

    const { coords } = block

    let canFill = true

    coords.forEach( v => {
      const withinLimits = v.x < this.limits.x && v.y < this.limits.y
      if (!withinLimits) {
        canFill = false
        return LAYOUT_LOOP_BREAK
      }

      const contents = this.filled.get(v.toString())
      if (contents && contents != block) {
        canFill = false
        return LAYOUT_LOOP_BREAK
      }
    })

    if (canFill) {
      this.max.x = max(this.max.x, coords.pos.x + coords.dim.x)
      this.max.y = max(this.max.y, coords.pos.y + coords.dim.y)
      coords.forEach(v => this.filled.set(v.toString(), block))
    }

    return canFill
  }

  getFreeArea() {
    let area = null
    const { filled, limits, max } = this

    //find start pos
    for (let y = 0; y < limits.y; y++ ) {
      for (let x = 0; x < limits.x; x++ ) {
        const occupied = filled.has(`${x},${y}`)
        if (!occupied) {
          area = new Coords(x,y,1,Infinity)
          break
        }
      }

      if (area !== null)
        break
    }

    //find x limit
    for (let x = area.pos.x + 1; x <= limits.x; x++) {
      const occupied = filled.has(`${x},${area.pos.y}`)
      if (occupied)
        break

      area.dim.x = x - area.pos.x
    }

    //find y limit
    for (let y = area.pos.y + 1; y < limits.y; y++ ) {
      for (let x = area.pos.x; x < area.pos.x + area.dim.x; x++ ) {
        const occupied = filled.has(`${x},${y}`)
        if (occupied)
          return area

        area.dim.y = y - area.pos.y

      }
      if (y > max.y) {
        area.dim.y = Infinity
        break
      }
    }

    return area
  }
}

export default class Layout {

  constructor(dimension = 40) {
    this.dimension = dimension
  }

  apply(blocks) {
    this.cells = new Cells(this.floorAxis(this.bounds ? this.bounds.width : Infinity))

    const unplaced = blocks.slice()

    //ensure no block is too big
    blocks.forEach(block => {
      const coords = block.coords
      if (coords.dim.x > this.cells.limits.x) {
        const oldX = coords.dim.x
        coords.dim.x = this.cells.limits.x
        coords.dim.y = round(coords.dim.y * (coords.dim.x / oldX))
      }
    })

    while (unplaced.length > 0)
      this.place(unplaced)

    let freeArea = this.cells.getFreeArea()
    while (freeArea.pos.x > 0 || freeArea.pos.y < this.cells.max.y) {
      this.resizeAdjacent(freeArea)
      freeArea = this.cells.getFreeArea()
    }

  }

  place(unplaced) {
    const freeArea = this.cells.getFreeArea()

    const bestBlock = this.pluckAnyFit(unplaced, freeArea)
    if (!bestBlock)
      return this.resizeAdjacent(freeArea)

    const coords = bestBlock.coords
    if (coords.dim.x > freeArea.dim.x) {
      const oldX = coords.dim.x
      coords.dim.x = freeArea.dim.x
      coords.dim.y = round(coords.dim.y * (coords.dim.x / oldX))
    }

    if (coords.dim.y > freeArea.dim.y)
      coords.dim.y = freeArea.dim.y

    coords.pos.x = freeArea.pos.x
    coords.pos.y = freeArea.pos.y

    const success = this.cells.tryFill(bestBlock)
    if (!success)
      console.warn(bestBlock, ' could not be placed')

  }

  resizeAdjacent(freeArea) {
    let success = false

    const upPos = freeArea.pos.sub({x:0, y:1})
    const upBlock = this.cells.filled.get(upPos.toString())
    if (upBlock) {
      const y = freeArea.dim.y === Infinity ? 1 : freeArea.dim.y
      upBlock.coords.dim.y += y
      success = this.cells.tryFill(upBlock)
      if (!success)
        upBlock.coords.dim.y -= y
    }

    const leftPos = freeArea.pos.sub({x:1, y: 0})
    const leftBlock = this.cells.filled.get(leftPos.toString())
    if (leftBlock && !success) {
      leftBlock.coords.dim.x += freeArea.dim.x
      success = this.cells.tryFill(leftBlock)
      if (!success)
        leftBlock.coords.dim.x -= freeArea.dim.x
    }

    if (!success)
      console.warn('could not resize')

    return success
  }

  pluckAnyFit(blocks, freeArea) {

    const onlyX = freeArea.dim.y === Infinity

    for (let i = 0; i < blocks.length; i++) {
      const { coords } = blocks[i]

      const diffX = freeArea.dim.x - coords.dim.x
      const diffY = onlyX ? 0 : freeArea.dim.y - coords.dim.y

      //stop immediatly if any match
      if (diffX >= 0 && diffY >= 0)
        return blocks.splice(i, 1)[0]
    }

    return null
  }

  floorAxis = axis => {

    if (!is(axis, Number))
      return 1

    const { dimension } = this
    return max(floor(axis / dimension), 1)

  }
}

Layout.Coords = Coords
