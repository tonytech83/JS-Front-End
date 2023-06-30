const numbers = [5, 2, 10, 1, 8];

const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
}

console.log(numbers.sort(compareNumbers.ascending))
console.log(numbers.sort(compareNumbers.descending))

