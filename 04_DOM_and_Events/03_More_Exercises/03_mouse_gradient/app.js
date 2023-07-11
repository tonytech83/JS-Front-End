function attachGradientEvents() {
    const resultDiv = document.getElementById('result')
    const gradientBox = document.getElementById('gradient-box')

    gradientBox.addEventListener('mousemove', hoverHandler)
    gradientBox.addEventListener('mouseout', mouseOutHandler)

    function hoverHandler(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);

        resultDiv.textContent = power + '%'
    }

    function mouseOutHandler() {
        resultDiv.textContent = '';
    }

}
