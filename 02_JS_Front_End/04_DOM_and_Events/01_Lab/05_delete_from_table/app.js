function deleteByEmail() {
  const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
  const input = document.querySelector('input').value;
  const resultDiv = document.getElementById('result')


  let foundEmail = evenTds.find((td) => td.textContent === input);

  if (foundEmail) {
    foundEmail.parentNode.remove()
    resultDiv.textContent = 'Deleted.'
  } else {
    resultDiv.textContent = 'Not found.';
  }

}