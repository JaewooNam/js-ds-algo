function solution(A) {
  let max = -Infinity
  
  let i = 0
  let j = 0
  while(i < A.length) {
    if (j+1 > i && max < A[j+1] - A[i]) {
      console.log('j: ', j, 'i: ', i, 'max: ', max)
      max = Math.max(A[j+1] - A[i], max)
      j++
    }
    i++
  }
  console.log(max)
}


solution([23171, 21011, 21123, 21366, 21013, 21367])