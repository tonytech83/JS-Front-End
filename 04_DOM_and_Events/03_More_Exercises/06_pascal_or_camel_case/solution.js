function solve() {
  const input = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  let inputToLowerCase = input.toLowerCase().split(' ');

  if (currentCase === 'Camel Case') {
    result.textContent += inputToLowerCase.shift()
    for (const word of inputToLowerCase) {
      result.textContent += word.charAt(0).toUpperCase() + word.slice(1)
    }
  } else if (currentCase === 'Pascal Case') {
    for (const word of inputToLowerCase) {
      result.textContent += word.charAt(0).toUpperCase() + word.slice(1)
    }
  } else {
    result.textContent = 'Error!'
  }

}