function coockingByNumbers(numerAsString, ...operators) {
    let number = Number(numerAsString)

    operators
        .forEach((operator) => {
            switch (operator) {
                case 'chop':
                    number /= 2;
                    console.log(number)
                    break;
                case 'dice':
                    number = Math.sqrt(number)
                    console.log(number)
                    break;
                case 'spice':
                    number++
                    console.log(number)
                    break;
                case 'bake':
                    number *= 3
                    console.log(number)
                    break;
                case 'fillet':
                    number -= number * 0.2
                    console.log(number)
                    break;
            }
        });

}

coockingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');