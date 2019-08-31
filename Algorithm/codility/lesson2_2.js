function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const map = {"first" : "1", "second" : "2"};
console.log(getKeyByValue(map,"2"));

function solution(str) {
  // write your code in JavaScript (Node.js 8.9.4)
  // const b = A.filter(el => A.indexOf(el) === A.lastIndexOf(el)) // '4'
  // console.log(b[0])
  let result = {}
  for (let i=0; i<str.length; i++) {
    const char = str[i]
    // if char is a number/letter AND is a key in obejct, add one to count
    if (result[char]) {
      result[char]++
    } else {
      result[char] =  1
    }
  }

  Object.keys(result).find(key => result[key] === value)
  console.log(result)
}


solution([9,3,9,3,9,7,9])
solution([2,2,3,3,5])
