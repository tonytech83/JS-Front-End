function signCheck(...numbers) {
  return numbers
    .filter(number => number < 0) // filter only negative numbers
    .length % 2 === 0 ? 'Positive' : 'Negative' // check if length divided by two is zero or one 

};

console.log(
  signCheck(
    5,
    12,
    -15
  )
)

console.log(
  signCheck(
    -6,
    -12,
    14
  )
)

console.log(
  signCheck(
    -1,
    -2,
    -3
  )
)

console.log(
  signCheck(
    -5,
    1,
    1
  )
)