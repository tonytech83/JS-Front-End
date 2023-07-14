function solve() {
  const input = document.getElementById('input');
  const selectMenuTo = document.getElementById('selectMenuTo');
  const convertBtn = document.getElementsByTagName('button')[0];
  const result = document.getElementById('result');

  addOptions(selectMenuTo);
  convertBtn.addEventListener('click', clickHandler);


  function addOptions(selectMenuTo) {
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');

    binaryOption.text = 'Binary';
    binaryOption.value = 'binary';
    hexadecimalOption.text = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);
  }

  function clickHandler() {
    let selection = selectMenuTo.value;
    let strToNumber = Number(input.value);
    let output = '';

    if (selection === 'binary') {
      output = (strToNumber >>> 0).toString(2)
    } else {
      output = (strToNumber >>> 0).toString(16).toLocaleUpperCase()
    }

    result.value = output;
  }
}
