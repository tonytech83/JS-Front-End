function formatGrade(grade) {

    let description;

    if (grade < 3) {
        description = 'Fail'
        console.log('Fail (2)');
    } else if (grade < 3.50) {
        description = 'Poor'
    } else if (grade < 4.50) {
        description = 'Good'
    } else if (grade < 5.50) {
        description = 'Very good'
    } else {
        description = 'Excellent'
    }

    if (description !== 'Fail') {
        console.log(`${description} (${grade.toFixed(2)})`)
    }

}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)
formatGrade(5.51)