function solution(n) {
  return Array(n).fill().map((v, i) => i + 1).reduce((a, c) => n % c ? a : a + c, 0)
}

solution(12)