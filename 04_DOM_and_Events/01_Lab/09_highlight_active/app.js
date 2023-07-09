function focused() {

  const inputFields = Array.from(document.querySelectorAll('input[type="text"]'));

  inputFields
    .forEach((input) => {
      input.addEventListener('focus', highlightSection);
      input.addEventListener('blur', removeHighlight);
    });

  function highlightSection(event) {
    const inputField = event.target;
    const parentDiv = inputField.parentNode;

    parentDiv.classList.add('focused');
  }

  function removeHighlight(event) {
    const inputField = event.target;
    const parentDiv = inputField.parentNode;

    if (parentDiv.classList.contains('focused')) {
      parentDiv.classList.remove('focused');
    }

  }
}

