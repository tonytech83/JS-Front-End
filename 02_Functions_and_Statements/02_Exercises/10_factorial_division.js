function factorialDivision(firstNum, secondNum) {

  function getFactorial(number) {

    if (number === 1) {
      return 1;
    } else {
      return number * (getFactorial(number - 1));
    }

  }

  return (getFactorial(firstNum) / getFactorial(secondNum)).toFixed(2);
}


console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));