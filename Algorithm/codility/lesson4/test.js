
function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let findIndex = A.indexOf(X) > -1 ? A.indexOf(X) : -1
  return findIndex
}

solution(5, [1,3,1,4,2,3,5,4])

function solution(X, A) {
  // write your code in JavaScript (Node.js 0.12)
  var sum = 0;
  var expected = (X * (X + 1)) / 2;
  var positions = [];
  for (var i in A) {
      console.log('i : ', i)
      var current = A[i];
      console.log('A[i] : ', A[i])
      if(!positions[current]) {
          console.log('current : ', current)
          positions[current] = true;
          sum += current;
          console.log('sum : ', sum)
          if (sum == expected) {
              return +i;
          }
      }
  }
  return -1;
}

solution(5, [1,3,1,4,2,3,5,4])
