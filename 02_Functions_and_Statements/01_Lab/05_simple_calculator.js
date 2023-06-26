/**
 * This function returns the result of math operation between two number regarding received operator.
 * @param {Number} aNum The first number
 * @param {Number} bNum The second number
 * @param {String} operator Math operator 
 * @returns {Number} Result of math operation
 */
function simpleCalculator(aNum, bNum, operator) {

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  const operatorsMap = {
    add,
    subtract,
    divide,
    multiply
  }

  return operatorsMap[operator](aNum, bNum);
}

console.log(
  simpleCalculator(
    5,
    5,
    'multiply'
  )
);

console.log(
  simpleCalculator(
    40,
    8,
    'divide'
  )
);

console.log(
  simpleCalculator(
    12,
    19,
    'add'
  )
);

console.log(
  simpleCalculator(
    50,
    13,
    'subtract'
  )
);