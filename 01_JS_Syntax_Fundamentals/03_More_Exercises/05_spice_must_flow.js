function spiceMine(startingYield) {
    let totalExtractedYield = 0;
    let day = 0;
    const workersConsummation = 26;

    for (let i = 1; startingYield >= 100; i++) {
        totalExtractedYield += (startingYield - workersConsummation);
        startingYield -= 10;
        day = i;
    }

    console.log(day)
    if (totalExtractedYield >= workersConsummation) {
        console.log(totalExtractedYield - workersConsummation)
    } else {
        console.log(totalExtractedYield)
    }
    
}

spiceMine(111);
spiceMine(99);
spiceMine(450);