function modernTimes(text) {
    return text.split(' ')
        .filter((word) => word.startsWith('#') && containsOnlyLetters(word))
        .map((word) => word.slice(1)) // remove '#' symbol
        .filter((word) => word !== '') // checks if word is not empty string
        .join('\n')


    function containsOnlyLetters(word) {
        return [...word.toLowerCase()] // make a word in array of letters (exam ['#', 'a', 'b', 'c'])
            .slice(1) // remove '#' (exam ['a', 'b', 'c' ])
            .map((symbol) => symbol.charCodeAt(0)) // for each symbol converted it to ascii code (exam [97, 98, 99])
            .every((charCode) => charCode >= 97 && charCode <= 122); // if all returns true else false
    }
}


console.log(modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia'));
console.log(modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign'));