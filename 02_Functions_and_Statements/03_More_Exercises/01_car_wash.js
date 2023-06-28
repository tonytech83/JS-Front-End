function carWash(commands) {

  let commandsMap = {
    'soap': (acc) => acc + 10,
    'water': (acc) => acc * 1.2,
    'vacuum cleaner': (acc) => acc * 1.25,
    'mud': (acc) => acc * 0.9
  }


  const result = commands.reduce((acc, command) => {
    const action = commandsMap[command];
    return action(acc)
  }, 0)

  return `The car is ${result.toFixed(2)}% clean.`;

}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]));