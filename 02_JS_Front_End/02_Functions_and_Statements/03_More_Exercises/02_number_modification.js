function numberModification(number) {
  var numberToStrArray = number.toString().split('').map(str => parseInt(str))

  while (true) {
    let digitsSum = numberToStrArray.reduce((a, b) => a + b, 0)
    let numberLength = numberToStrArray.length

    if (digitsSum / numberLength < 5) {
      numberToStrArray.push(9)
    } else {
      return numberToStrArray.join('')
    }

  } 

}

console.log(numberModification(101));
console.log(numberModification(5835))
