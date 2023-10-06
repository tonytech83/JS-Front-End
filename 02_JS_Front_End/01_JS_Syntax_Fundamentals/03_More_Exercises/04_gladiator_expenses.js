function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrockenCounter = 0;

    for (let idx = 1; idx <= lostFightsCount; idx++) {
        if (idx % 2 === 0) {
            expenses += helmetPrice;
        }

        if (idx % 3 === 0) {
            expenses += swordPrice;
            if (idx % 2 === 0) {
                expenses += shieldPrice
                shieldBrockenCounter += 1
                if (shieldBrockenCounter === 2) {
                    expenses += armorPrice
                    shieldBrockenCounter = 0;
                }
            }
        }
    }

    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}

console.log(gladiatorExpenses(7, 2, 3, 4, 5))
console.log(gladiatorExpenses(23, 12.50, 21.50, 40, 200))