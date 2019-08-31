function solution(N) {
  // N = D * M
  // 24 = 6 * 4
  
  // 1..2,147,...
  let cnt = 1
  const a = Array(N).fill().map((v, i) => i).reduce((a,b) =>{
    N % b === 0 ? cnt++ : a
  })
  console.log(cnt)
}

solution(24)