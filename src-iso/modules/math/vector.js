import lerp from './lerp'
import clamp from './clamp'
import { sqrt, cos, sin, PI, atan2 } from './index'

export default class Vector {

  static get zero() {
    return new Vector
  }

  static lerp(from, to, delta=0) {
    const x = lerp(from.x, to.x, delta)
    const y = lerp(from.y, to.y, delta)

    return new Vector(x,y)
  }

  static clamp(value, low, hi) {
    const x = clamp(value.x, low.x, hi.x)
    const y = clamp(value.y, low.y, hi.y)

    return new Vector(x,y)
  }

  static distance(from, to) {
    return sqrt(this.sqrDistance(from, to))
  }

  static sqrDistance(from, to) {
    return from.sub(to).sqrMagnitude
  }

  static dot(a, b) {
    const an = a.normalized()
    const bn = b.normalized()

    return an.x * bn.x + an.y * bn.y
  }

  constructor(x=0, y=0) {
    this.x = x
    this.y = y
  }

  iadd(vec = Vector.zero) {
    this.x += vec.x
    this.y += vec.y
    return this
  }

  add(vec = Vector.zero) {
    return new Vector(this.x + vec.x, this.y + vec.y)
  }

  isub(vec = Vector.zero) {
    this.x -= vec.x
    this.y -= vec.y
    return this
  }

  sub(vec = Vector.zero) {
    return new Vector(this.x - vec.x, this.y - vec.y)
  }

  imult(factor = 1) {
    this.x *= factor
    this.y *= factor
    return this
  }

  mult(factor = 1) {
    return new Vector(this.x * factor, this.y * factor)
  }

  idiv(factor = 1) {
    this.x /= factor
    this.y /= factor
    return this
  }

  div(factor = 0) {
    return new Vector(this.x / factor, this.y / factor)
  }

  ilerp(to = Vector.zero, delta = 0) {
    this.x = lerp(this.x, to.x, delta)
    this.y = lerp(this.y, to.y, delta)
    return this
  }

  lerp(to = Vector.zero, delta = 0) {
    return Vector.lerp(this, to, delta)
  }

  iclamp(low = Vector.zero, hi = Vector.zero) {
    this.x = clamp(this.x, low.x, hi.x)
    this.y = clamp(this.y, low.y, hi.y)
    return this
  }

  clamp(low = Vector.zero, hi = Vector.zero) {
    return Vector.clamp(this, low, hi)
  }

  normalized() {
    const mag = this.magnitude
    return mag === 0
      ? Vector.zero
      : new Vector(this.x / mag, this.y / mag)
  }

  rotate(deg) {
    const rad = deg * PI / 180
    const c = cos(rad)
    const s = sin(rad)

    return new Vector(this.x * c - this.y * s,
                      this.y * c + this.y * s)
  }

  perpendicular(h = 1) {
    return (new Vector(-this.y, this.x))
      .idiv(this.magnitude)
      .imult(h)
  }

  copy() {
    return new Vector(this.x, this.y)
  }

  get angle() {
    return atan2(this.y, this.x) * 180 / PI
  }

  get magnitude() {
    return sqrt(this.sqrMagnitude)
  }

  get sqrMagnitude() {
    return this.x ** 2 + this.y ** 2
  }

  toString() {
    return `${this.x},${this.y}`
  }

}
