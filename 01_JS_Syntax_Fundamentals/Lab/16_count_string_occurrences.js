function solve(inputText, searchedWord) {
    let wordsInText = inputText.split(' ')
    let couner = 0

    for (const word of wordsInText) {
        if (word === searchedWord) {
            couner += 1;
        }    
    }

    console.log(couner)
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');