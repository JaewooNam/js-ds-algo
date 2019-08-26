function pairElement(str) {
  // AT, CG
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  }
  
  const arr = str.split("")
  return arr.map(x => [x,pairs[x]])
}

pairElement("GCG");