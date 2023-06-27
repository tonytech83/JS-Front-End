function palindromeIntegers(numbers) {
  let result = [];

  numbers.forEach(element => {
    isPalindrome(element)
  });

  function isPalindrome(number) {
    let reversedNumber = Number(
      number
        .toString()
        .split('')
        .reverse()
        .join('')
    )

    if (reversedNumber === number) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result.join('\n');

}

console.log(
  palindromeIntegers(
    [123, 323, 421, 121]
  )
);

console.log(
  palindromeIntegers(
    [32, 2, 232, 1010]
  )
);