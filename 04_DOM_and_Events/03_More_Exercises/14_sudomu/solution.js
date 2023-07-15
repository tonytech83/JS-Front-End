function solve() {
  const [checkBtn, clearBtn] = document.getElementsByTagName('button');
  let cells = document.querySelectorAll('input[type=number]');
  const output = document.querySelector('#check > p');
  const table = document.getElementsByTagName('table')[0];

  checkBtn.addEventListener('click', checkBoard);
  checkBtn.style.cursor ='pointer';
  clearBtn.addEventListener('click', clearBoard);
  clearBtn.style.cursor ='pointer';

  function checkBoard() {
    isValid = true;

    let board = [
      [cells[0].value, cells[1].value, cells[2].value],
      [cells[3].value, cells[4].value, cells[5].value],
      [cells[6].value, cells[7].value, cells[8].value]
    ];

    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      let column = board.map(row => row[i]);

      if (column.length != new Set(column).size || row.length != new Set(row).size) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      output.textContent = 'You solve it! Congratulations!';
      table.style.border = '2px solid green'
      output.style.color = 'green'
    } else {
      output.textContent = 'NOP! You are not done yet...';
      table.style.border = '2px solid red';
      output.style.color = 'red';
    }
  }

  function clearBoard() {
    [...cells].forEach(cell => (cell.value = ''));

    table.style.border = 'none';
    output.textContent = ''
  }
}
