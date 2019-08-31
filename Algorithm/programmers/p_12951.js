// JadenCase 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12951
// function solution(s) {
//   const str = s.split(' ')
  
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//     newStr += str[i][0].toUpperCase()+str[i].substr(1).toLowerCase()+' '
//   }
//   console.log(newStr)
// }

// console.log(solution("3people unFollowed me"))


function solution(s) {
  return s.split(' ').map(v => { 
      return v.split('').map((a, i) => {
        console.log('a: ', a) // 3,p,e,o...
        console.log('i: ', i) // 0,1,2,3... , 0,1.., 0,1
        i ? a.toLowerCase() : a.toUpperCase()}).join('');
  }).join(' ');
}

solution("3people unFollowed me")