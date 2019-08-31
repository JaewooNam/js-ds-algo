// function solution(A) {
//     // write your code in JavaScript (Node.js 6.4.0)
//     const length = A.length;
    
//     var result = A.reduce((i, value) => {
//       console.log('re:', i)
//       console.log('val : ', value)
//         i[value] = true;
//         return i;
//     }, {})
//     console.log(result)
//     for(var i=1; i<=length; i++){
//         if(!result[i]){
//             return 0;	
//         }
//     }

//     return 1;
// }

// console.log(solution([4,1,2,3]))


function advancedSolution(A) {
  if (A.length > 100000) return -1
  const sortedArr = A.sort((a,b)=>a-b)
  let obj = {}
  for (let val of sortedArr) {
    obj[val] = (obj[val] || 0) + 1    
  }
  console.log(obj)
  for (let i = 1; i <= A.length; i++) {
    if (!obj[i]) {
      return 0
    }
  }

  return 1
}

console.log(advancedSolution([1,2,5]))