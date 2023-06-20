function solve(dayType, age) {
    let result;

    if (age >= 0 && age <= 122) {
        if (dayType === 'Weekday') {
            if (age >= 0 && age <= 18) {
                result = '12$'
            } else if (age > 18 && age <= 64) {
                result = '18$'
            } else {
                result = '12$'
            }
        } else if (dayType === 'Weekend') {
            if (age >= 0 && age <= 18) {
                result = '15$'
            } else if (age > 18 && age <= 64) {
                result = '20$'
            } else {
                result = '15$'
            }
        } else {
            if (age >= 0 && age <= 18) {
                result = '5$'
            } else if (age > 18 && age <= 64) {
                result = '12$'
            } else {
                result = '10$'
            }
        }
    } else {
        result = 'Error!'
    }

    console.log(result)
}

solve('Weekday', 42)
solve('Holiday', -12)
solve('Holiday', 15)