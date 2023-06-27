function addAndSubtract(...numbers) {
  [firstNum, secondNMum, thirdNum] = numbers

  const sum = (a, b) => a + b;
  const subtract = (theSum, num) => theSum - num;

  return subtract(sum(firstNum, secondNMum), thirdNum);

}

console.log(
  addAndSubtract(
    23,
    6,
    10
  )
)

console.log(
  addAndSubtract(
    1,
    17,
    30
  )
)

console.log(
  addAndSubtract(
    42,
    58,
    100
  )
)