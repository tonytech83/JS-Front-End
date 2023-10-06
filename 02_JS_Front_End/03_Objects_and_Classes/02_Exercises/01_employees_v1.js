function employeesList(data) {
  listObj = [];

  data
    .forEach(name => {
      listObj.push({ employeeName: name, personalNum: name.length });
    });

  listObj
    .forEach(employee => {
      console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`)
    })
}

employeesList(
  ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']
);

employeesList(
  ['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']
);