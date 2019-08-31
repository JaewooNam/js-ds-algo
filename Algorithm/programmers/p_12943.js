// https://programmers.co.kr/learn/courses/30/lessons/12943
function solution(num, cnt) {
  // if even number / 2
  // if odd, * 3 + 1 
  // ...to 1
  return count === 500 
    ? -1 
    : num === 1
      ? count
        : solution(num % 2 ? num * 3 + 1 : num / 2, count + 1);
}