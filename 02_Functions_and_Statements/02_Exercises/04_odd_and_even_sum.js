function oddAndEvenSum(number) {
  let digitsAsStr = number.toString().split('')

  const evenSum = digitsAsStr
    .map((x) => Number(x))
    .filter((x) => x % 2 === 0)
    .reduce((a, b) => a + b, 0)

  const oddSum = digitsAsStr
    .map((x) => Number(x))
    .filter((x) => x % 2 != 0)
    .reduce((a, b) => a + b, 0)

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
console.log(oddAndEvenSum(11));
console.log(oddAndEvenSum(22));