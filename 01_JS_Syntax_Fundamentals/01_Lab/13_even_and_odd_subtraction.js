function solve(inputArr) {
    let diff = 0;

    for (const el of inputArr) {
        if (el % 2 === 0) {
            diff += el;
        } else {
            diff -= el;
        }
    }

    console.log(diff)
}

solve([1, 2, 3, 4, 5, 6])
solve([3, 5, 7, 9])
solve([2, 4, 6, 8, 10])