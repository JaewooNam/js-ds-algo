function solution(N, A) {
  let arr = Array(N).fill(0)
  let max = 0
  for (let i = 0; i < A.length; i++) {
    console.log(arr)
    if (A[i] >= 1 && A[i] <= N) {
      arr[A[i]-1]++
      // max = Math.max.apply(null, arr)
      max = arr[A[i]-1]
    } else if (A[i] === N + 1) {
      arr.fill(max)
    }
  }

  return arr
}

console.log(solution(5,[3,4,4,6,1,4,4]))

// advanced code
// function solution_2(N,A) {
//   var j
//   var i
//   var len = A.length
//   var lastMax = 0
//   var max = 0
//   var counter = new Array(N)

// }