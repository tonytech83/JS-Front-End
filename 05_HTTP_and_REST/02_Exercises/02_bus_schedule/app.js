function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule";
  const busStopInfo = document.querySelector('#info > .info');
  const btnDepart = document.getElementById('depart');
  const btnArrive = document.getElementById('arrive');
  let nextStopId = "depot";
  let previousStopName = null;

  console.log(busStopInfo.textContent)

  function depart() {

    btnDepart.disabled = true;
    btnArrive.disabled = false;

    fetch(BASE_URL + `/${nextStopId}`)
      .then(res => res.json())
      .then((data) => {
        nextStopId = data.next;
        previousStopName = data.name;
        busStopInfo.textContent = `Next stop ${data.name}`;
      })
      .catch(() => {
        btnDepart.disabled = true;
        btnArrive.disabled = true;
        busStopInfo.textContent = 'Error';
      });
  }

  async function arrive() {
    btnDepart.disabled = false;
    btnArrive.disabled = true;
    busStopInfo.textContent = `Arrived at ${previousStopName}`;
  }

  return {
    depart,
    arrive
  };
}

let result = solve();