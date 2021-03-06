test(`should be easier to determine whether a string includes another`, () => {
    const sentence = 'It was the best of times. It was the worst of times'
    // create a variable called `result` that is assigned to a call of (( sentence.includes ))
    const result = 'your implementation goes here'
    expect(result).toBe(true)
  })
  
  test(`should be easier to repeat a string`, () => {
    const repeated = 'abc123'
    // create a variable called `result` that is the result of repeating the string 4 times
    const result = 'your implementation goes here'
    expect(result).toBe('abc123abc123abc123abc123')
  })
  
  test(`should be able to take an array-like object and convert it into an array`, () => {
    const obj = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
    // this is even more handy with a NodeList like that returned from document.querySelector
    // create a variable called `result` and assign it to a call to (( Array.from ))
    const result = 'your implementation goes here'
    expect(result).toEqual(['a', 'b', 'c'])
  })
  
  test.skip(`should be easier to fill an array with values`, () => {
    const originalArray = new Array(5)
    // create a variable called `result` and assign it to an array that's filled with 3s except for the first item.
    const result = 'your implementation goes here'
    expect(result).toEqual([, 3, 3, 3, 3])
  })
  
  test.skip(`should be easy to copy properties from one object to another`, () => {
    const source1 = {
      a: {
        b: 'c',
        m: [1, 2, 3],
      },
    }
    const source2 = {
      d: false,
      z: 34,
    }
    const source3 = {
      z: 42,
      p: ['a', 'b', 'c'],
    }
  
    const target = {
      a: {
        q: 'r',
        m: [4, 5, 6],
        s: {
          t: 3,
        },
      },
      d: true,
      p: ['x', 'y', 'z'],
    }
    // merge the sources into the target using Object.assign
    let result = 'your implementation #1 goes here'
  
    expect(result).toEqual({
      a: {
        b: 'c',
        m: [1, 2, 3],
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c'],
    })
  
    // this is only here to indicate that the assignment is not deep
    result = 'your implementation #2 goes here'

    expect(result).not.toEqual({
      a: {
        b: 'c',
        m: [1, 2, 3],
        q: 'r',
        s: {
          t: 3,
        },
      },
      d: false,
      z: 42,
      p: ['a', 'b', 'c'],
    })
  })
