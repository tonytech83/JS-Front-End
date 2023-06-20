function solve(argument) {
    let result;

    if (typeof argument === 'number') {
        result = (Math.PI * Math.pow(argument, 2)).toFixed(2)
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof argument}.`
    }

    console.log(result)
}

solve(5)
solve('name')