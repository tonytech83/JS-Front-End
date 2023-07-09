function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    let result = document.getElementById('result');

    result.textContent = Number(firstNumber.value) - Number(secondNumber.value);
}