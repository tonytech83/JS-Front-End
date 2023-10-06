function extractText() {
  const liElements = Array.from(document.getElementsByTagName('li'));
  const result = document.getElementById('result');

  liElements
    .forEach((li) => result.textContent += `${li.textContent}\n`);

}