function palindromeIntegers(numbers) {
  const isPalindrome = (number) => Number([...number.toString()].reverse().join('')) == number;
  
  return numbers
    .map(isPalindrome)
    .join('\n');

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