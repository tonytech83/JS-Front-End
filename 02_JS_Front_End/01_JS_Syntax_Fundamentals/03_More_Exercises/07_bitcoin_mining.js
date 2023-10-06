function bitcoinMining(mine) {
    const oneBitcoinPrice = 11949.16;
    const oneGramGoldPrice = 67.51;
    let totalMoneyRaised = 0;
    let theDay = 0;

    for (const [idx, digGold] of mine.entries()) {
        let day = idx + 1

        if (day % 3 === 0) {
            totalMoneyRaised += digGold * 0.7 * oneGramGoldPrice
        } else {
            totalMoneyRaised += digGold * oneGramGoldPrice
        }

        if (totalMoneyRaised >= oneBitcoinPrice && theDay === 0) {
            theDay = day;
        }
    }

    console.log(`Bought bitcoins: ${Math.floor(totalMoneyRaised / oneBitcoinPrice)}`)
    if (theDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${theDay}`)
    }
    console.log(`Left money: ${(totalMoneyRaised - (Math.floor(totalMoneyRaised / oneBitcoinPrice)) * oneBitcoinPrice).toFixed(2)} lv.`)
}


bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);