function printElementOnNhtStep(stringArr, step) {
    const result = [];

    for (let idx = 0; idx < stringArr.length; idx += step) {
        result.push(stringArr[idx])
    }

    return result;
}

console.log(printElementOnNhtStep(['5', '20', '31', '4', '20'], 2));
console.log(printElementOnNhtStep(['5', '20', '31', '4', '20'], 2));
console.log(printElementOnNhtStep(['1', '2', '3', '4', '5'], 6));
