// for .. in

// ..in
const arr = [1,2,3,4]
console.log(5 in arr) // false

// for .. of



const arr = [1,2,3,4,6,7,8]
console.logarr.map(i=>0) // [0,0,0,0,0,..] 8개

// Remove duplication
const arr = [1,3,2,4,3,1,5,6,1,2,2]
const newArr = [...new Set(arr)]
console.log(newArr) // [1,3,2,4,5,6]

const str = "abcdacbe"
const newStr = [...new Set(str)].join('')
console.log(newStr) // abcde

// Find unique element
const arr2 = [1,1,4,1,1]
const filteredArr2 = arr2.filter( el => arr2.indexOf(el) === arr2.lastIndexOf(el))
filteredArr2 // 4
const str2 = '11411'
str2.split('').filter(el => str2.indexOf(el) === str2.lastIndexOf(el)) // '4'

// Remove ith index
// 1. keep origin value
const arr3 = [1,2,3,4,5]
// remove 2nd index
const newArr2 = [...arr.slice(0,2), ...arr3.slice(3)]
// 2. destruct origin value
const arr4 = [1,2,3,4,5]
arr4.splice(2,1) // from 2nd index, remove one value

// join


// split


// slice


// reduce


// 소수 구하는 함수
function primecheck(n){
  for(var i=2;i<=Math.sqrt(n);i++){
    if(n%i == 0){
      return false;
    }
  }
  return true;
}

// object의 value로 key를 접근하는 방법
result = {...}
return Object.keys(result).find(key => result[key] === 1)

