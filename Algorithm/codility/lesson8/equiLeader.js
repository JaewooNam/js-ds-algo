function solution(A) {
  // const obj = {}
  // for (let val of A) {
  //   obj[val] = (obj[val] || 0) + 1
  // }

  let obj1 = {}
  let obj2 = {}
  
  let arr1 = []
  let arr2 = []
  for (let i = 1; i < A.length; i++) {
    arr1 = A.slice(0, i)
    arr2 = A.slice(i, A.length)
    for (let val of arr1) {
      obj1[val] = (obj1[val] || 0) + 1
    }
    for (let val of arr2) {
      obj2[val] = (obj2[val] || 0) + 1
    }

    const a = Object.keys(obj1).filter(key => obj1[key] >= Math.ceil(arr1.length/2))
    const b = Object.keys(obj2).filter(key => obj2[key] >= Math.ceil(arr2.length/2))
    if (Math.max(...a) === Math.max(...b)) console.log('find!!')
  }
}

const A = [4,3,4,4,4,2]
solution(A)