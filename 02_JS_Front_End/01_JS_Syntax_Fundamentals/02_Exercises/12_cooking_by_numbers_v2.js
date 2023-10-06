function coockingByNumbers(numerAsString, ...operators) {
    let number = Number(numerAsString)

    operators
        .forEach(operator => {
            let operatorsMap = {
                'chop': number / 2,
                'dice': Math.sqrt(number),
                'spice': number + 1,
                'bake': number * 3,
                'fillet': number - (number * 0.2)
            }

            number = operatorsMap[operator]
            console.log(number)
        });

}

coockingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');