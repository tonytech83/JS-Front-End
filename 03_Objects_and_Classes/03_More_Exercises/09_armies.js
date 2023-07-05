function parseArmies(data) {
  let leadersData = {};

  data
    .forEach(line => {
      if (line.includes('arrives')) {
        let idx = line.indexOf('arrives')
        let leaderName = line.slice(0, idx)
        console.lov
        leadersData[leaderName] = [];
      }

      if (line.includes(':')) {
        let [leaderName, armyInfo] = line.split(': ')
        if (leadersData.hasOwnProperty(leaderName)) {
          let [armyName, armyCount] = armyInfo.split(', ')
          console.log(armyName)
          console.log(armyCount)
        }
      }
    });

  // console.log(leadersData);
}

parseArmies(
  [
    'Rick Burr arrives',
    // 'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    // 'Findlay arrives',
    // 'Findlay: Britox, 34540',
    // 'Wexamp + 6000',
    // 'Juard + 1350',
    // 'Britox + 4500',
    // 'Porter arrives',
    // 'Porter: Legion, 55000',
    // 'Legion + 302',
    // 'Rick Burr defeated',
    // 'Porter: Retix, 3205'
  ]
)