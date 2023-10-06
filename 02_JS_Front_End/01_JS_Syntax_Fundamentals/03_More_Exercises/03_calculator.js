function calculator(firstNum, operator, secondNum) {
    let operatorsMap = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '/': firstNum / secondNum,
        '*': firstNum * secondNum
    };

    return (operatorsMap[operator]).toFixed(2);
}

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));
console.log(calculator(0, '/', 5))