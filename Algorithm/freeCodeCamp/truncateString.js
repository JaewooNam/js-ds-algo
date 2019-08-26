function truncateString(str, num) {
  // Clear out that junk in your trunk
  let trunc = ''
  if (str.length >= num) trunc = '...'
  console.log(str.substr(0, num) + trunc)
  return str.substr(0, num) + trunc
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);