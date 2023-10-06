function solve(firstChar, secondChar, thirdChar) {
    let charArr = [];
    charArr.push(firstChar, secondChar, thirdChar)
    reversedArr = (charArr.reverse()).join(' ')

    console.log(reversedArr)

}

solve('A', 'B', 'C')
solve('1', 'L', '&')