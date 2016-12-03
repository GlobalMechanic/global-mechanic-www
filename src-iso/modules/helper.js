import { browserHistory } from 'react-router'

export function navigate(path) {
  const sanitized = path.replace(/\/\//g, '/')
  const encoded = encodeURI(sanitized)
  browserHistory.push(encoded)
}

export function urlify(str) {
  return str
    .toLowerCase()
    .replace(/\s/g, '_')
    .replace(/\?/g, '_qm')
}

export function getFullName(person) {
  const { name } = person
  const { first, last } = name

  return `${(first || '' )} ${(last || '')}`.trim()
}
