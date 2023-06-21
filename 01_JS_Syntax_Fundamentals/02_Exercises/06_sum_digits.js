function solve(number) {
    let sum = 0;

    for (const digit of number.toString()) {
        sum += parseInt(digit)
    }

    console.log(sum)
}

solve(245678);
solve(97561);
solve(543);