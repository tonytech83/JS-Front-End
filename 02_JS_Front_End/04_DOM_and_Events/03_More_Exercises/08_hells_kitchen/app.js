function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const data = JSON.parse(document.getElementById('inputs').getElementsByTagName('textarea')[0].value);
    const bestRestaurant = document.querySelector('#bestRestaurant > p');
    const workers = document.querySelector('#workers > p');
    let restaurants = {};

    for (const restaurantData of data) {
      let [name, workersData] = restaurantData.split(' - ');

      if (!restaurants.hasOwnProperty(name)) {
        restaurants[name] = {
          workers: {},
          bestSalary: 0,
          totalSalary: 0,
          avgSalary: 0,
        };
      }

      let workersInfo = workersData.split(', ');
      for (const worker of workersInfo) {
        let [workerName, workerSalary] = worker.split(' ');

        restaurants[name].workers[workerName] = Number(workerSalary);

        if (restaurants[name].bestSalary < Number(workerSalary)) {
          restaurants[name].bestSalary = Number(workerSalary);
        }

        restaurants[name].totalSalary += Number(workerSalary);

      }
    }

    for (const name in restaurants) {
      let numberOfWorkers = Object.entries(restaurants[name].workers).length
      restaurants[name].avgSalary = restaurants[name].totalSalary / numberOfWorkers
    }

    let sortByAvgSalary = Object.entries(restaurants)
      .sort((a, b) => b[1].avgSalary - a[1].avgSalary)

    let best = sortByAvgSalary[0]

    bestRestaurant.textContent = `Name: ${best[0]} Average Salary: ${best[1].avgSalary.toFixed(2)} Best Salary: ${best[1].bestSalary.toFixed(2)}`
    let bestWorkers = Object.entries(best[1].workers)
      .sort((a, b) => b[1] - a[1])

    for (const [workerName, workerSalary] of bestWorkers) {
      workers.textContent += `Name: ${workerName} With Salary: ${workerSalary} `
    }

  }

}

