function arrayRotation(inputArr, rotationsCount) {
    // reduce the count of rotations
    rotationsCount %= inputArr.length;

    for (let i = 0; i < rotationsCount; i++) {
        inputArr.push(inputArr.shift());
    }

    console.log(inputArr.join(' '))
}


arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);