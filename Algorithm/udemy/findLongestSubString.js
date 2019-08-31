/*
Write a function called findLongestSubstring, which accepts
a string and returns the length of the longest substring with all distinct characters.

ex)
'' - 0
'rithmschool' - 7
'thisisawesome' - 6
'thecatinthehat' - 7
'bbbbb' - 1
*/

function findLongestSubstring(str) {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    console.log('\n')
    console.log('i = ', i)
    // if duplicated character occur
    if (seen[str[i]]) {
      console.log('start : ', start)
      console.log('seen[str[i]] : ', seen[str[i]])
      start = Math.max(start, seen[str[i]])
    }

    console.log('longest : ', longest)
    console.log('i :', i, 'start: ', start + 1)
    longest = Math.max(longest, i - start + 1)
    seen[str[i]] = i + 1
  }
  console.log(seen)
  return longest
}

console.log(findLongestSubstring('abc'))