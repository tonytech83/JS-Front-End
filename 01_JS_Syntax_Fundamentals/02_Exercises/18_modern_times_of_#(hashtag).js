function modernTimes(inputString) {
    let words = inputString.split(' '); // string to array of words

    for (const word of words) {
        // checks if word starts with '#' and its length is bigger than 1 and is word is valid(only letters)
        if (word.startsWith('#') && word.length > 1 && validWord(word.substring(1))) { 
            console.log(word.substring(1));
        }

    }

    function validWord(checkedWord) {
        let isValid = true;
        let wordToLowerCase = checkedWord.toLowerCase();

        for (const ch of wordToLowerCase) {
            if (!(ch.codePointAt(0) >= 97 && ch.codePointAt(0) <= 122)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }

}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
