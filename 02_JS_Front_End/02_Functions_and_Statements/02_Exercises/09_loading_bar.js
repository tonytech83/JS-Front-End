function loadingBar(number) {
  return `${number}% ${(number === 100) ?
    'Complete!\n[%%%%%%%%%%]' :
    `[${'%'.repeat(number / 10) + '.'.repeat((100 - number) / 10)}]\nStill loading...`}`
}

console.log(loadingBar(30))
console.log(loadingBar(50))
console.log(loadingBar(100))