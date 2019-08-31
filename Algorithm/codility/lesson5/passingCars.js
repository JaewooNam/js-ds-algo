function solution(A) {
  let arr = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      const a = A.slice(A.indexOf(A[i])).filter(i => i === 1).length
      A.splice(A.indexOf(A[i]), 1)
      arr.push(a)
    }
  }
  
  return arr.reduce((v, i) => v + i)
}

//  0,1 arrays
// console.log(solution([0,1,0,1,1]))

// advanced
function advancedSolution(A) {
  let oneCount = A.filter(i => i === 1).length
  let result = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      result += oneCount
    } else {
      oneCount--
    }
  }

  if (result > 1000000000) {
    return false
  }
}

console.log(advancedSolution([0,1,0,1,1]))
