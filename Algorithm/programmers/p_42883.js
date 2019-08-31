function solution(number, k) {
  var answer = number.split('')
  let arr = []
  for (let i=0; i<number.length; i++) {
    console.log('i=', number[i])
    for (let j=i+1; j<number.length; j++) {
      arr.push(number[i].concat(number[j]))
      console.log('j=', number[j])
    }
  }
  console.log(arr)

  return answer;
}

solution("1924", 2)