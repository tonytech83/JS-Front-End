function modernTimes(text) {
    let pattern = /#[a-zA-Z]+/g
    let matches = text.match(pattern);

    for (const match of matches) {
        console.log(match.slice(1))
    }

}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');
