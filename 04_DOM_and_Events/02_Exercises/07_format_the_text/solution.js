function solve() {
  const textareaInput = document.getElementById('input');
  const divOutput = document.getElementById('output');

  let sentences = textareaInput.value.split('.');

  let filteredSentences = sentences
    .filter((sentence) => sentence.length > 1)

  while (filteredSentences.length > 0) {
    let newParagraph = document.createElement('p')
    let threeSentence = filteredSentences.splice(0, 3)
    newParagraph.textContent = threeSentence.join('.') + '.'
    divOutput.appendChild(newParagraph);
  }

}
