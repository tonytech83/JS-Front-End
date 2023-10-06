function solve(number) {
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(`${number} X ${multiplier} = ${number * multiplier}`)     
    }
}

solve(5);