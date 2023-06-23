function stringSubstring(word, text) {

    let pattern = new RegExp(`\\b${word}\\b`, 'i')
    let textToLowerCase = text.toLowerCase()

    if (textToLowerCase.match(pattern)) {
        return word;
    }

    return `${word} not found!`;
}

console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));
console.log(stringSubstring('python', 'JavaScript is the best programming language #python'));


