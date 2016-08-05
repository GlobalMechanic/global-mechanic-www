const DefaultOption = {
  foo: 'bar',
  ace: true
}

const other = { ace: false }

let newOption = Object.assign(DefaultOption, { ace: false })

console.log(newOption)
