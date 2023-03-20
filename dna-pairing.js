function pairElement(str) {
  const basePairs = { A : "T", T : "A", C : "G", G : "C"};
  return str.split("").map(char => [char, basePairs[char]]);
}

console.log(pairElement("GCG"));
