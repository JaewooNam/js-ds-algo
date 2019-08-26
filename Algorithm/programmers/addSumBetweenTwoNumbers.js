// https://programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
  let answer = 0;
  const cnt = Math.abs(b-a) + 1
  answer = (a + b) * cnt / 2

  return answer;
}
