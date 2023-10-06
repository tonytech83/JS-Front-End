function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll('#main > div > button'));

  buttons
    .forEach((button) => button.addEventListener('click', clickHandler))

  function clickHandler(event) {
    const radioButtonLock = this.parentNode.childNodes[5]

    if (!radioButtonLock.checked) {
      const userInfoDiv = this.previousElementSibling
      userInfoDiv.style.display = this.textContent === 'Show more' ? 'block' : 'none';
      this.textContent = this.textContent == 'Show more' ? 'Hide it' : 'Show more';
    }
  }
}