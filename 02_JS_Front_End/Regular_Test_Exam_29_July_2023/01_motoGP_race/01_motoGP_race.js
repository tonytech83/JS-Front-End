function solve(data) {
  const ridersCount = data.splice(0, 1);
  const ridersData = data.slice(0, ridersCount);
  const commands = data.slice(ridersCount, data.length);
  let riders = {};

  for (const riderInfo of ridersData) {
    const [riderName, fuelCapacity, position] = riderInfo.split('|');
    riders[riderName] = [fuelCapacity, Number(position)];
  }

  const commandsMap = {
    'StopForFuel': stopForFuel,
    'Overtaking': overtaking,
    'EngineFail': engineFail,
  };

  for (const commandData of commands) {
    const [command] = commandData.split(' - ')

    if (command === 'Finish') {
      break;
    }

    commandsMap[command](commandData);
  }

  function stopForFuel(data) {
    const [_, riderName, minFuel, newPos] = data.split(' - ');
    const currentFuel = riders[riderName][0];

    if (Number(currentFuel) < Number(minFuel)) {
      console.log(`${riderName} stopped to refuel but lost his position, now he is ${newPos}.`);
      riders[riderName][1] = newPos;
    } else {
      console.log(`${riderName} does not need to stop for fuel!`);
    }
  }

  function overtaking(data) {
    const [_, riderOne, riderTwo] = data.split(' - ');
    const riderOnePos = riders[riderOne][1];
    const riderTwoPos =  riders[riderTwo][1];

    if (riderOnePos < riderTwoPos) {
      console.log(`${riderOne} overtook ${riderTwo}!`)
      riders[riderOne][1] = riderTwoPos;
      riders[riderTwo][1] = riderOnePos;
    }
  }

  function engineFail(data) {
    const [_, riderName, lapsLeft] = data.split(' - ');
    delete riders[riderName];
    console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
  }

  for (const key in riders) {
    console.log(`${key}`)
    console.log(` Final position: ${riders[key][1]}`)
  }

}

solve(
  [
    "3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
  ]
)

solve(
  [
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
  ]
)

