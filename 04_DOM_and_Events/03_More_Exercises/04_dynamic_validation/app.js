function validate() {
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('change', inputCheckered);

  function inputCheckered(event) {
    const userInput = event.currentTarget.value;
    const pattern = /^([a-z0-9_\-\.]+)@([a-z0-9_\-]+)(\.[a-z]{2,5}){1,2}$/g
    let match = userInput.match(pattern);

    if (!match) {
      emailInput.classList.add('error')
    } else {
      emailInput.classList.remove('error')
    }

  }
}