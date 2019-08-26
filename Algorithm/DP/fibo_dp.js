// Dynamic Programming
// Find nth Fibonachi
function fibo(n) {
  let memo = []
  if (n <= 1) {
    return n
  } else {
    if (memo[n] > 0) {
      return memo[n]
    }
    memo[n] = fibo(n-1) + fibo(n-2)
    return memo[n]
  }
}

console.log(fibo(3))
