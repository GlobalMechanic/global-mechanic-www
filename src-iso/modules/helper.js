import { browserHistory } from 'react-router'

export function navigate(path) {
  browserHistory.push(path.replace(/\/\//g, '/'))
}

export function urlify(str) {
  return str
    .toLowerCase()
    .replace(/\s/g, '_')
    .replace(/\?/g,'')
}

export function getFullName(person) {
  const { name } = person
  const { first, last } = name

  return `${(first || '' )} ${(last || '')}`.trim()
}
