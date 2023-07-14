function encodeAndDecodeMessages() {
  const [encodeBtn, decodeBtn] = Array.from(document.getElementsByTagName('button'));
  const [messageInput, receivedMessage] = Array.from(document.getElementsByTagName('textarea'));

  encodeBtn.addEventListener('click', encodeAndSend);
  decodeBtn.addEventListener('click', decodeAndRead);

  function encodeAndSend() {
    let message = messageInput.value
    const charsArray = [...message]

    encodedMessage = charsArray
      .map(char => char.charCodeAt() + 1)
      .map(charCode => String.fromCharCode(charCode))

    receivedMessage.value = encodedMessage.join('')
    messageInput.value = ''
  }

  function decodeAndRead() {
    let message = receivedMessage.value
    const charsArray = [...message]

    decodedMessage = charsArray
      .map(char => char.charCodeAt() - 1)
      .map(charCode => String.fromCharCode(charCode))

    receivedMessage.value = decodedMessage.join('')
  }
}