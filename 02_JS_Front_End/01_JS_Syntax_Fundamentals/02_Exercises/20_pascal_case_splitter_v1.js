function pascalCaseSplitter(inputString) {
    var pattern = /([A-Z][a-z]*)/g;
    var match;
    var wordsArr = [];

    do {
        match = pattern.exec(inputString)
        if (match) {
            wordsArr.push(match[0])
        }
    }  while (match);

    console.log(wordsArr.join(', '))
    
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('Split#Start');
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')