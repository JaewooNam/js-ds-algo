function solution(S, P, Q) {
  const obj = {
    'A': 1,
    'C': 2,
    'G': 3,
    'T': 4,
  }

  let pSlice
  let qSlice
  let arr = []
  

  console.log(S.substring(2,5))
  for (let i = 0; i < S.length; i++) {
    console.log(S.slice(P[i], Q[i]+1))
  }
  
}

solution('CAGCCTA',[2,5,0],[4,5,6])