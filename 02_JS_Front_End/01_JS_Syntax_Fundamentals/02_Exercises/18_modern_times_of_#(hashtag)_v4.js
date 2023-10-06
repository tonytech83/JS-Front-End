function modernTimes(text) {

    return text.match(/#[a-zA-Z]+/g)
        .map((word) => word.slice(1))
        .join('\n')

}



console.log(modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia'));
console.log(modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign'));