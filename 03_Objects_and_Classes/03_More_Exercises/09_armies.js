function parseArmies(data) {
  let leadersData = {};

  function addLeader(line) {
    let idx = line.indexOf('arrives')
    let leaderName = line.slice(0, idx - 1)
    leadersData[leaderName] = {
      armies: {},
      totalArmyCount: 0,
    };
  }

  function addArmy(line) {
    let [leaderName, armyInfo] = line.split(': ')
    if (leadersData.hasOwnProperty(leaderName)) {
      let [armyName, armyCount] = armyInfo.split(', ')
      if (!leadersData[leaderName].armies.hasOwnProperty(armyName)) {
        leadersData[leaderName].armies[armyName] = Number(armyCount);
      }
      leadersData[leaderName].totalArmyCount += Number(armyCount);
    }
  }

  function removeLeader(line) {
    let idx = line.indexOf('defeated')
    let leaderName = line.slice(0, idx - 1)
    if (leadersData.hasOwnProperty(leaderName)) {
      delete leadersData[leaderName]
    }

  }

  function addCountToArmy(line) {
    let [armyName, armyCount] = line.split(' + ')
    Object.entries(leadersData)
      .forEach(leader => {
        let leaderName = leader[0]
        if (leadersData[leaderName].armies.hasOwnProperty(armyName)) {
          leadersData[leaderName].armies[armyName] += Number(armyCount);
          leadersData[leaderName].totalArmyCount += Number(armyCount);
        }

      })
  }

  function printLeaders() {
    Object.entries(leadersData)
      .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount)
      .forEach(leader => {
        console.log(`${leader[0]}: ${leader[1].totalArmyCount}`)

        Object.entries(leader[1].armies)
          .sort((a, b) => b[1] - a[1])
          .forEach(army => console.log(`>>> ${army[0]} - ${army[1]}`))
      })
  }

  data
    .forEach(line => {
      if (line.includes('arrives')) {
        addLeader(line);
      } else if (line.includes(':')) {
        addArmy(line);
      } else if (line.includes('defeated')) {
        removeLeader(line);
      } else if (line.includes('+')) {
        addCountToArmy(line);
      }

    });

  printLeaders();

}

parseArmies(
  [
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
  ]
);

parseArmies(
  [
    'Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'
  ]
);