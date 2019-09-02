function solution(A) {
  let obj = {}
  for (let val of A) {
    obj[val] = (obj[val] || 0) + 1
  }
  
  const a = Object.keys(obj).find(key => obj[key] === 1)
  console.log(a)
}


solution([9,3,9,3,9,7,9])
