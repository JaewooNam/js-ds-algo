
function solution(S) {
  if (S.length > 2000000 || S.length < 1) return -1
  if (S.length === 1) return 0
  if (S.length % 2 === 0) return -1
  const middle = (S.length-1) / 2
  const firstStr = S.slice(0, middle)
  const secondStr = S.slice(middle+1, S.length)
  return firstStr.split('').reverse().join('') === secondStr ? middle : -1
}

console.log(solution('racaadadadadadsdsdsdsdsdsdsddscecacar'))