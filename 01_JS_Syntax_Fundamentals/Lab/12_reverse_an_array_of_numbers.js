function solve(number, inputArr) {
    let outputArr = ''

    for (let idx = number - 1; idx >= 0; idx--) {
        outputArr += `${inputArr[idx]} `
    }

    console.log(outputArr)
}


solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])