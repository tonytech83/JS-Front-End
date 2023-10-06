function checkForPerfectNumber(number) {
  let dividersSum = 0;

  for (let divider = 1; divider <= Math.floor(number / 2) ; divider++) {
    if (number % divider === 0)
      dividersSum += divider
  }

  return (number === dividersSum) ? "We have a perfect number!" : "It's not so perfect.";
}

console.log(checkForPerfectNumber(6))
console.log(checkForPerfectNumber(28))
console.log(checkForPerfectNumber(1236498))