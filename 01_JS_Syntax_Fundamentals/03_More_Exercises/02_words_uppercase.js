function wordsUpperCase(inputString) {
    // let re = /[A-z]+/g
    let re = /[A-z-]*/g

    return inputString.match(re)
        .filter((word) => word.length > 0)
        .map((word) => word.toUpperCase().trim())
        .join(', ')

}

console.log(wordsUpperCase('Hi, how are you?'))
console.log(wordsUpperCase('hello-there'))
console.log(wordsUpperCase('Functions in JS can be nested, i.e. hold other functions'))

// TODO - rice an error on Test 2 in judge system!