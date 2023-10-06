function attachEventsListeners() {
  const convertBtn = document.getElementById('convert')

  convertBtn.addEventListener('click', clickHandler);

  function clickHandler() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');
    const inputUnit = document.getElementById('inputUnits').value;
    const outputUnit = document.getElementById('outputUnits').value;

    inputMapper = {
      'm': Number(inputDistance.value),
      'km': Number(inputDistance.value) * 1000,
      'cm': Number(inputDistance.value) * 0.01,
      'mm': Number(inputDistance.value) * 0.001,
      'mi': Number(inputDistance.value) * 1609.34,
      'yrd': Number(inputDistance.value) * 0.9144,
      'ft': Number(inputDistance.value) * 0.3048,
      'in': Number(inputDistance.value) * 0.0254
    }

    let inputToMeters = inputMapper[inputUnit]

    outputMapper = {
      'm': inputToMeters,
      'km': inputToMeters / 1000,
      'cm': inputToMeters / 0.01,
      'mm': inputToMeters / 0.001,
      'mi': inputToMeters / 1609.34,
      'yrd': inputToMeters / 0.9144,
      'ft': inputToMeters / 0.3048,
      'in': inputToMeters / 0.0254
    }

    outputDistance.value = outputMapper[outputUnit]

  }

}