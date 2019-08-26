function largestOfFour(arr) {
  // You can do this!
  let tmp = []
  arr.map(i => {
    let largest = 0
    i.map(j => {
      if (j > largest) {
        largest = j
      }
    })

    tmp.push(largest)
  })
  
  return tmp;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);