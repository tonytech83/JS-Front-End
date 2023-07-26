function solve(data) {
  let horses = data.splice(0, 1)[0].split('|');
  const commands = data

  const commandMap = {
    'Retake': retake,
    'Trouble': trouble,
    'Rage': rage,
    'Miracle': miracle,
  }

  for (const commandData of commands) {
    let [command] = commandData.split(' ');

    if (command === 'Finish') {
      break;
    }

    commandMap[command](commandData);
  }

  function retake(data) {
    const [_, takingHorseName, takenHorseName] = data.split(' ');
    takingHorseIdx = horses.indexOf(takingHorseName);
    takenHorseIdx = horses.indexOf(takenHorseName);

    if (takingHorseIdx < takenHorseIdx) {
      [horses[takingHorseIdx], horses[takenHorseIdx]] = [horses[takenHorseIdx], horses[takingHorseIdx]];
      console.log(`${takingHorseName} retakes ${takenHorseName}.`)
    }
  }

  function trouble(data) {
    const [_, horseName] = data.split(' ');
    const horseIdx = horses.indexOf(horseName);

    if (horseIdx > 0) {
      horses.splice(horseIdx, 1);
      horses.splice(horseIdx - 1, 0, horseName)
      console.log(`Trouble for ${horseName} - drops one position.`)
    }
  }

  function rage(data) {
    const [_, horseName] = data.split(' ');
    const horsePos = horses.indexOf(horseName);
    const firstPos = horses.length - 1;

    if (horsePos !== firstPos) {
      if (horsePos === firstPos - 1) {
        horses.splice(horsePos, 1);
        horses.push(horseName);
      } else {
        horses.splice(horsePos, 1);
        horses.splice(horsePos + 2, 0, horseName);
      }
      console.log(`${horseName} rages 2 positions ahead.`)
    }
  }

  function miracle() {
    if (horses.length > 1) {
      let [horseName] = horses.splice(0, 1);
      horses.push(horseName)
      console.log(`What a miracle - ${horseName} becomes first.`)
    }
  }

  console.log(horses.join('->'));
  console.log(`The winner is: ${horses[horses.length - 1]}`)
}

// solve(
//   [
//     'Bella|Alexia|Sugar',
//     'Retake Bella Alexia'
//   ]
// )

// solve(
//   [
//     'Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'
//   ]
// )

solve(
  [
    'Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'
  ]
)

// solve(
//   [
//     'Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'
//   ]
// )


