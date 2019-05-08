test('has a set method', () => {
  // Create a new map called 'myMap'
  // add a new entry. Use 'name' as the key and 'Aaron' as the value
  let myMap = new Map()
  myMap.set('name', 'Aaron')
  expect(myMap.get('name')).toBe('Aaron')
})

test('can use objects as a key', () => {
  const user = {
    name: 'Aaron'
  }
  const value = {
    twitter: '@js_dev',
    gplus: '+AaronFrost'
  }

  let myMap = new Map()
  myMap.set(user, value)

  // Create a map called 'myMap'
  // add a new entry. Use user as the key, and value as the value

  expect(myMap.has(user)).toBe(true)
  expect(myMap.get(user)).toBe(value)
})

test(`doesn't coerce keys`, () => {
  let myMap = new Map()
  myMap.set('1', 'Aaron')
  expect(myMap.get(1)).toBe('Aaron')
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe(undefined)
})