function calc() {
  const firstInput = document.getElementById('num1');     // takes from html an object
  const secondInput = document.getElementById('num2');    // takes from html an object
  const sumInput = document.getElementById('sum');        // takes from html an object

  // takes values parameters from firstInput and secondInput and parse them to Number
  let sum = Number(firstInput.value) + Number(secondInput.value);

  // change the value of sumInput to variable sum
  sumInput.value = sum;
}
