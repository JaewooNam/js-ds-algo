function solution(A) {
  let min = A.slice(0,2).reduce((v,i) => v + i)
  let sum = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      sum = A.slice(i, j + 1).reduce((v,i) => v + i)
      if (sum >= min) {
        min = sum
      }
    }
  }

  return min
}