function employeesList(data) {

  Object.entries(
    data.reduce((data, employee) => {
      data[employee] = employee.length;
      return data;
    }, {})            // parse array to object => {{name: num}, {name: num}}
  )                   // parse object to array of arrays => [Array(2), Array(2), Array(2), Array(2)]
    .forEach(([employeeName, employeeNum]) => {
      console.log(`Name: ${employeeName} -- Personal Number: ${employeeNum}`);
    })

}

employeesList(
  ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']
);

employeesList(
  ['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']
);