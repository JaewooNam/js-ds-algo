// https://programmers.co.kr/learn/courses/30/lessons/12921
// unsolved yet
function solution(n) {
  var answer = 0;
  for (let i=2; i<=n; i++) {
    for (let j=i ; j >= 2; j--) {
      if (i % j !== 0) {
        answer++
      }
    }
  }
  console.log(answer)

  return answer;
}

solution(10)