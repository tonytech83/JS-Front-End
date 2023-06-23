function pascalCaseSplitter(inputString) {
    let characters = inputString.split('');
    let output = [];

    for (const char of characters) {
        let asciiCode = char.charCodeAt() 
        if (asciiCode >= 65 && asciiCode <= 90) {
            if (output.length > 0) {
                output += ', '
            }
            output += char
        } else {
            output += char
        }
    }

    console.log(output)

}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('Split#Start');
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')