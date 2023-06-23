function stringSubstring(word, text) {

    return text.toLowerCase()
    .split(' ')
    .some((w) => w === word.toLowerCase()) ? word : `${word} not found!`;
}

console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));
console.log(stringSubstring('python', 'JavaScript is the best programming language #python'));