function organizePieces(data) {
  const numberOfPieces = Number(data[0]);
  let pieces = data.slice(1, numberOfPieces + 1);
  let commands = data.slice(numberOfPieces + 1)

  piecesLibrary = {};

  for (const pieceInfo of pieces) {
    const [piece, composer, key] = pieceInfo.split('|');
    piecesLibrary[piece] = [composer, key];
  }

  for (const commandInfo of commands) {
    let command = commandInfo.split('|')[0];

    if (command === 'Add') {
      addPiece(commandInfo);
    } else if (command === 'Remove') {
      removePiece(commandInfo);
    } else if (command === 'ChangeKey') {
      changePieceKey(commandInfo);
    } else {
      output();
    }
  }

  function addPiece(data) {
    const [_, piece, composer, key] = data.split('|');
    if (!piecesLibrary.hasOwnProperty(piece)) {
      piecesLibrary[piece] = [composer, key];
      console.log(`${piece} by ${composer} in ${key} added to the collection!`)
    } else {
      console.log(`${piece} is already in the collection!`)
    }
  }

  function removePiece(data) {
    const [_, piece] = data.split("|");
    if (piecesLibrary.hasOwnProperty(piece)) {
      delete piecesLibrary[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
  }

  function changePieceKey(data) {
    const [_, piece, newKey] = data.split('|')
    if (piecesLibrary.hasOwnProperty(piece)) {
      piecesLibrary[piece][1] = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`)
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
  }

  function output() {
    for (const pieceName in piecesLibrary) {
      console.log(`${pieceName} -> Composer: ${piecesLibrary[pieceName][0]}, Key: ${piecesLibrary[pieceName][1]}`)
    }
  }

}

organizePieces(
  [
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
  ]
)

organizePieces(
  [
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
)