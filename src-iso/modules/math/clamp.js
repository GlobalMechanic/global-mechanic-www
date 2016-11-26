export function clamp(num, min = 0, max = 1) {
  return num < min ? min : num > max ? max : num
}
