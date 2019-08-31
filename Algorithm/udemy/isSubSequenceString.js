function isSubSequence(str1, str2) {
  let i = 0
  let j = 0
  while (j < str2.length) {
    console.log('i: ', i)
    console.log('j: ', j)
    console.log('\n')
    if (str1[i] === str2[j]) {
      i++
    }
    j++
    if (i === str1.length) {
      return true
    }
  }

  return false
}

console.log(isSubSequence('hello', 'hekkkkkklalo'))