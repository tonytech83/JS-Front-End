function solve(inputText, inputWord) {

    let censored = inputText;

    while (censored.includes(inputWord))
        censored = censored.replace(inputWord, '*'.repeat(inputWord.length))

    console.log(censored)
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden')