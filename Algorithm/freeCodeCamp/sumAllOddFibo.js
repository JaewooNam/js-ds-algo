function sumFibs(num) {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  const arrFib = [1];
  let nextFib = 0;
  let firstFib = 0;
  let secondFib = 1
  while((nextFib = firstFib + secondFib) <= num) {
      firstFib = secondFib
      secondFib = nextFib
      if (nextFib % 2 !== 0 ) {
        arrFib.push(nextFib);
      }
  }

  return arrFib.reduce((acc, curr) => {
    return acc + curr;
  });
}

console.log(sumFibs(10))
