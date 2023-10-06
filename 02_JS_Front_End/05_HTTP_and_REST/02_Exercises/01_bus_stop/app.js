function getInfo() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";
  const stopId = document.getElementById('stopId').value;
  const buses = document.getElementById('buses');
  const stopName = document.getElementById('stopName');

  buses.innerHTML = ''; //remove all elements from the container

  fetch(BASE_URL + stopId)
    .then(res => res.json())
    .then(data => {
      stopName.textContent = data.name;
      for (const busNum in data.buses) {
        const li = document.createElement('li');
        li.textContent = `Bus ${busNum} arrives in ${data.buses[busNum]} minutes`
        buses.appendChild(li);
      }
    })
    .catch(() => stopName.textContent = 'Error')
}