function revealWords(words, text) {

    wordsArr = words.split(', ')

    for (let i = 0; i < wordsArr.length; i++) {
        text = text.replace('*'.repeat(wordsArr[i].length), wordsArr[i]);
    }

    return text;

}

console.log(
    revealWords(
        'great', 'softuni is ***** place for learning new programming languages'
    )
);

console.log(
    revealWords(
        'great, learning', 'softuni is ***** place for ******** new programming languages'
    )
)
