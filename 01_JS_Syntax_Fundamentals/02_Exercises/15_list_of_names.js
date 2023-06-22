function listOfNames(arrayOfNames) {
    let idx = 1
    arrayOfNames.sort((aName, bName) => aName.localeCompare(bName))
        .forEach(name => {
            console.log(`${idx}.${name}`)
            idx++
        });

}

listOfNames(["John", "Bob", "Christina", "Ema"]);