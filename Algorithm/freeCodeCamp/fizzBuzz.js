/*
The FizzBuzz challenge goes something like this. Write a function that does the following:
console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5

Example:
  fizzBuzz(5)
  Result:
  1
  2
  fizz
  4
  buzz
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(5)