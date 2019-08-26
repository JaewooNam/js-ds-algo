function sumAll(arr) {
  let cnt = Math.abs(arr[0] - arr[1]) + 1
  console.log(cnt)
  return ((arr[0] + arr[1]) * cnt) / 2
}

sumAll([1, 4]);