function repeatStringNumTimes(str, num) {
  // repeat after me
  let a = ""
  for (let i = 0; i < num; i++) {
    a += str
  }
  console.log(a)
  return a;
}

repeatStringNumTimes("abc", 3); // abcabcabc
