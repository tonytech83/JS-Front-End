function solve(fruitType, weight, pricePerKilogram) {
    console.log(`I need $${(weight / 1000 * pricePerKilogram).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruitType}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)