function heroRegister(heroData) {
  let heroes = [];

  heroData
    .forEach(heroInfo => {
      let [heroName, heroLevel, heroItems] = heroInfo.split(' / ')
      heroes.push({ name: heroName, level: Number(heroLevel), items: heroItems.split(', ') })
    });

  let sortedHeroesByLevel = heroes.sort((a, b) => {
    return a.level - b.level
  })

  for (const { name, level, items } of sortedHeroesByLevel) {
    console.log(`Hero: ${name}`);
    console.log(`level => ${level}`)
    console.log(`items => ${items.join(', ')}`)
  }
}


heroRegister(
  [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ]
)

heroRegister(
  [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
  ]
)