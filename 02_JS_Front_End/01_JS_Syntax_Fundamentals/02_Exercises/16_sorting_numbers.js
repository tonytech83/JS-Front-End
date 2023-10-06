function sortingNumbers(arr) {
    let result = [];
    arr.sort((aNum, bNum) => aNum - bNum)

    while (arr.length > 0) {
        result.push(arr.shift());
        result.push(arr.pop());
    }

    return result.filter(e => e !== undefined);
    
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
