function findLongestWordLength(str) {
  const words = str.split(" ")
  let len = ""
  for (let word of words) {
    if (word.length >= len) {
      len = word.length
    }
  }

  return len
}
const str = "The quick brown fox jumped over the lazy dog"
console.log(findLongestWordLength(str))