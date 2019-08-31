function solution(A) {
  let tmp = []
  A.reduce((acc, val) => {
    console.log('acc : ', acc)
    console.log('val : ', val)
    tmp.push(acc + val)
    return acc + val
  })
  console.log(tmp)
}

const A = [3,1,2,4,3]
solution(A)