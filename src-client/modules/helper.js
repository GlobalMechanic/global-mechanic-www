import randomColor from 'random-color'

export function randomHex () {
  return randomColor().hexString()
}

export function randomInt(lo=50, high=250) {
  const range = Math.random() * (high - lo)
  return Math.round(range + lo)
}
