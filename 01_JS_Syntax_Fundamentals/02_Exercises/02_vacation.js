function solve(peopleCount, groupType, day) {
    let total = 0;
    let discount = 1;

    if (groupType === 'Students' && peopleCount >= 30) {
        discount = 0.85
    } else if (groupType === 'Business' && peopleCount >= 100) {
        peopleCount -= 10
    } else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        discount = 0.95
    }


    switch (groupType) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    total = peopleCount * 8.45 * discount
                    break;
                case 'Saturday':
                    total = peopleCount * 9.80 * discount
                    break;
                case 'Sunday':
                    total = peopleCount * 10.46 * discount
                    break;
            }
            break;

        case 'Business':
            switch (day) {
                case 'Friday':
                    total = peopleCount * 10.90
                    break;
                case 'Saturday':
                    total = peopleCount * 15.60
                    break;
                case 'Sunday':
                    total = peopleCount * 16
                    break;
            }
            break;


        case 'Regular':
            switch (day) {
                case 'Friday':
                    total = peopleCount * 15 * discount
                    break;
                case 'Saturday':
                    total = peopleCount * 20 * discount
                    break;
                case 'Sunday':
                    total = peopleCount * 22.50 * discount
                    break;
            }
            break;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}



solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")