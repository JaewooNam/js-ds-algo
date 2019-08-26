// Write function which takes in a string and
// returns counts of each character in the string

// solution 1
function charCount(str) {
  // make object to return at end
  // loop over string, for eacth character...
  // if the char is a number/letter AND not in object, add it to object and set value to 1
  // if character is something else (space, period, etc.), don't do anything
  // return object at end
  let result = {}

  for (let i=0; i<str.length; i++) {
    const char = str[i].toLowerCase()
      // if char is a number/letter AND is a key in obejct, add one to count
    if (result[char]) {
      result[char]++
    } else {
      result[char] =  1
    }
  }
}

// solution 2
function charCount(str) {
  let obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)){
      obj[char] = ++obj[char] || 1
    }
  }

  return obj
}

// solution 3
function charCount(str) {
  let obj = {}
  for (let char of str) {
    if (isAlphaNumeric(char)){
      char = char.toLowerCase()
      obj[char] = ++obj[char] || 1
    }
  }

  return obj
}

// it is faster than regex
function isAlphaNumeric(char) {
  const code  = char.charCodeAt(0)
  if (!(code > 47 && code < 58) && //numeric 0-9
      !(code> 64 && code < 91) &&// upper alpha A-Z
      !(code > 96 && code < 123)) { // lower alpha a-z
    return false
  }
  return true
}
