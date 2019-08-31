function solution(A) {
  const uniqueArr = [...new Set(A)].sort((a,b) => a - b)
  const filteredArr = uniqueArr.filter(i => i > 0)
  if (filteredArr.length === 0) return 1
  const max = Math.max.apply(null, filteredArr)
  const range = Array(max).fill().map((v,i) => i + 1)
  
  const a = range.filter(el => !filteredArr.includes(el))
  return Math.min.apply(null, a)
  console.log(a)


  // const range = Array(filteredArr.length).fill().map((v, i) => i + 1)
}

console.log(solution([-1,2,3,4,5,9,10,11,16]))



// advanced solution
function advancedSol(A) {
  const len = A.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
      hash[A[i]] = A[i];
  }
  console.log(hash)
  for (let i = 1; i < 1000002; i++) {
      if(!hash[i]) return i;
  }
  return 1;
}

advancedSol([-100,-220,2,3,4,5,9,10,11,16])