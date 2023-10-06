function attachEventsListeners() {
  const convertButtons = Array.from(document.querySelectorAll('input[type="button"]'));

  convertButtons
    .forEach(button => button.addEventListener('click', clickHandler));

  function clickHandler(event) {
    let targetParent = event.currentTarget.parentElement;
    let inputId = targetParent.querySelector('input[type=text]').id 
    let input = targetParent.querySelector('input[type=text]').value
    let inputToSeconds = 0;

    if (inputId === 'days') {
      inputToSeconds = Number(input) * 86400;
    } else if(inputId === 'hours') {
      inputToSeconds = Number(input) * 3600;
    } else if(inputId === 'minutes') {
      inputToSeconds = Number(input) * 60;
    } else {
      inputToSeconds = Number(input)
    }

    const allOutputCells = Array.from(document.querySelectorAll('input[type=text]'));

    for (const outputCell of allOutputCells) {
      if (outputCell.id === 'days' && outputCell.id != inputId) {
        outputCell.value = inputToSeconds / 86400
      }

      if (outputCell.id === 'hours' && outputCell.id != inputId) {
        outputCell.value = inputToSeconds / 3600
      }

      if (outputCell.id === 'minutes' && outputCell.id != inputId) {
        outputCell.value = inputToSeconds / 60
      }

      if (outputCell.id === 'seconds' && outputCell.id != inputId) {
        outputCell.value = inputToSeconds
      }     
    }
    
  }
}