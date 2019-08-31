// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
  var answer = false;
  let i = s.length
  let pCnt = 0
  let yCnt = 0
  while (i--) {
    let char = s.charAt(i)
    if (char.toLowerCase() === 'p') {
      pCnt++
    } else if (char.toLowerCase() === 'y') {
      yCnt++
    }
  }

  if (pCnt === yCnt) {
    answer = true
  }

  return answer;
}

const s = 'pPoooY'
solution(s)

// Good solution is here
function solution(s){
  return s.match(/p/ig).length == s.match(/y/ig).length;
}