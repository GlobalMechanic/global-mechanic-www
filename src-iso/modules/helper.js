export function urlify(str) {
  return str
    .toLowerCase()
    .replace(/\s/g, '_')
    .replace(/\?/g,'')
}
