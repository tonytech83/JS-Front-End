function printDNA(length) {

  let dnaSequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G']

  for (let idx = 0; idx < length; idx++) {
    if (idx % 4 == 0) {
      console.log(`**${dnaSequence[0]}${dnaSequence[1]}**`)
      moveCouple(dnaSequence)
    } else if (idx % 4 == 1) {
      console.log(`*${dnaSequence[0]}--${dnaSequence[1]}*`)
      moveCouple(dnaSequence)
    } else if (idx % 4 == 2) {
      console.log(`${dnaSequence[0]}----${dnaSequence[1]}`)
      moveCouple(dnaSequence)
    } else if (idx % 4 == 3) {
      console.log(`*${dnaSequence[0]}--${dnaSequence[1]}*`)
      moveCouple(dnaSequence)
    }
  }

  function moveCouple(dnaSequence) {
    const dnaPiece = dnaSequence.splice(0, 2);
    dnaSequence = dnaSequence.push(...dnaPiece)
  }

}

printDNA(4);
printDNA(10);
