function wordsUpperCase(inputString) {
    let re = /\w+/g

    return inputString.match(re)
        .filter((word) => word.length > 0)
        .map((word) => word.toUpperCase().trim())
        .join(', ')

}

console.log(wordsUpperCase('Hi, how are you?'))
console.log(wordsUpperCase('hello-there'))
console.log(wordsUpperCase('Functions in JS can be nested, i.e. hold other functions'))

