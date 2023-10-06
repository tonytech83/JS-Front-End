function printTowns(data) {

  data
    // from array of strings => array of arrays
    .map((line) => line.split(' | '))
    // from array of arrays to array of objects
    .map(([town, latitude, longitude]) => ({ town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) }))
    .forEach(townObj => console.log(townObj));
}


printTowns(
  [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
  ]
)

printTowns(
  [
    'Plovdiv | 136.45 | 812.575'
  ]
)