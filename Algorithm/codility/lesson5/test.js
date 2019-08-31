function solution(A,B,K) {
  const a = Array.from({length: B-A+1}).map((v, i) => i + A)
  console.log(a)
  return a.filter(i => i % K === 0).length
}

console.log(solution(6,11,2))