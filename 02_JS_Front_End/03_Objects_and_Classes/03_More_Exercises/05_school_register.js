function schoolRegister(data) {
  let nextYearRegister = {};

  data
    .forEach(line => {
      let [nameStr, gradeStr, avgScoreStr] = line.split(', ')
      let name = nameStr.split(': ')[1]
      let grade = Number(gradeStr.split(': ')[1]) + 1
      let avgScore = Number(avgScoreStr.split(': ')[1])
      if (avgScore >= 3) {
        if (!nextYearRegister.hasOwnProperty(grade)) {
          nextYearRegister[grade] = [[], 0];
        }
        nextYearRegister[grade][0].push(name)
        nextYearRegister[grade][1] += avgScore
      }


    });

  Object.entries(nextYearRegister)
    .sort((a, b) => a - b)
    .forEach(grade => {
      console.log(`
      ${grade[0]} Grade
      List of students: ${grade[1][0].join(', ')}
      Average annual score from last year: ${((grade[1][1] / grade[1][0].length).toFixed(2))}`)
    })
}

schoolRegister(
  [
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
  ]
)

schoolRegister(
  [
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
  ]
)