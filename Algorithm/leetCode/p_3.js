// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
  if (!s) return false

  let tmp = []
  let max = -Infinity
  for (let i = 0; i < s.length; i++) {
    if (tmp.indexOf(s[i]) < 0) {
      tmp.push(s[i])
    } else {
      if (tmp.length > max) {
        max = tmp.length
      }
      tmp.push(s[i])
      let idx = tmp.indexOf(s[i])
      tmp = tmp.slice(idx + 1)
    }
  }

  max = Math.max(tmp.length, max)
}

lengthOfLongestSubstring("ckilbkd")