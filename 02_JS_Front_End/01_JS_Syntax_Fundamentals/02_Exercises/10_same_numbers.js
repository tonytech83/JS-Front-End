function solve(number) {
    let sum = 0;
    let numberToString = number.toString();

    for (const digit of numberToString) {
        sum += parseInt(digit)
    }

    console.log(numberToString.split('').every(ch => ch === numberToString[0]))
    console.log(sum)
}

solve(2222222);
solve(1234);