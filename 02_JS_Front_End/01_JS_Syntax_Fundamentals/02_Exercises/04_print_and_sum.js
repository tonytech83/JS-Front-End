function solve(startNumber, endNumber) {
    let numbers = '';
    let sum = 0;

    for (let num = startNumber; num <= endNumber; num++) {
        numbers += `${num} `
        sum += num

    }

    console.log(numbers)
    console.log(`Sum: ${sum}`)
}

solve(5, 10)
solve(0, 26)