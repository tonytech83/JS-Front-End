function printCertificate(grade, names) {

  if (grade >= 3) {
    printHeader();
    printName(names);
    printGrade(grade)
  } else {
    console.log('Student does not qualify');
  }


  function printHeader() {
    console.log('~~~-   {@}   -~~~')
    console.log('~- Certificate -~')
    console.log('~~~-  ~---~  -~~~')
  }

  function printName([firstName, lastName]) {
    console.log(`${firstName} ${lastName}`)
  }

  function printGrade(grade) {

    let description;

    if (grade < 3) {
      description = 'Fail'
    } else if (grade < 3.50) {
      description = 'Poor'
    } else if (grade < 4.50) {
      description = 'Good'
    } else if (grade < 5.50) {
      description = 'Very good'
    } else {
      description = 'Excellent'
    }

    console.log(`${description} (${grade.toFixed(2)})`)

  };

}




printCertificate(5.25, ['Peter', 'Carter']);
printCertificate(2.99, ['Ivan', 'Ivanov']);