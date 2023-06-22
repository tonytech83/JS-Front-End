function modernTimes(inputString) {
    let words = inputString.split(' '); // string to array of words

    for (const word of words) {
        if (word.startsWith('#') && word.length > 1) { // checks if word starts with '#' and its length is bigger than 1
            if (validWord(word.substring(1))) { 
                console.log(word.substring(1));
            }

        }

    }

    function validWord(checkedWord) {
        let isValid = true;
        
        for (const ch of checkedWord.toLowerCase()) {
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