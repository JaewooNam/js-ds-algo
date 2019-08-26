function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(
      arr2.filter(el => !arr1.includes(el))
    )
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
