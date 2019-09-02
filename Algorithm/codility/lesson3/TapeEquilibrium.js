function solution(A) {
  let totalSum = A.reduce((v, i) => {
    return v + i
  })

  let i = 0
  let leftSum = 0
  let min = Infinity
  while (i < A.length) {
    totalSum -= A[i]
    leftSum = leftSum + A[i]
    if (min > Math.abs(totalSum - leftSum)) {
      min = Math.abs(totalSum - leftSum)
    }
    i++
  }

  return min
}

solution(A)