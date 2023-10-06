function wordsTracker(wordsArr) {
  searchedWords = {};

  wordsArr[0]
    .split(' ')
    .forEach(word => searchedWords[word] = 0)

  wordsArr.slice(1).forEach((word) => {
    if (searchedWords.hasOwnProperty(word)) {
      searchedWords[word] += 1;
    }
  })

  let sortedWordsByCount = Object.entries(searchedWords)
    .sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sortedWordsByCount) {
    console.log(`${word} - ${count}`);
  }

}

wordsTracker(
  [
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
  ]
);

wordsTracker(
  [
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
  ]
)