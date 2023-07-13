function generateReport() {
  const columns = Array.from(document.querySelectorAll('body > main > table > thead > tr > th'));
  const rows = Array.from(document.querySelectorAll('body > main > table > tbody > tr'));
  const output = document.getElementById('output');
  let checkedColumns = [];
  let result = [];
  let columnsMapper = {};

  for (const column of columns) {
    let idx = columns.indexOf(column);
    let columnName = column.textContent.toLocaleLowerCase().trim();
    columnsMapper[idx]= columnName;
  }

  columns
    .forEach(column => {
      if (column.children[0].checked) {
        idx = columns.indexOf(column)
        checkedColumns.push(idx)
      }
    })

  for (const row of rows) {
    let rowChildren = Array.from(row.children)
    let obj = {};
    for (const columnIdx of checkedColumns) {
      let columnName = columnsMapper[columnIdx]
      let value = rowChildren[columnIdx].textContent

      obj[columnName] = value;
    }

    result.push(obj)

  }

  output.textContent = JSON.stringify(result)

}

