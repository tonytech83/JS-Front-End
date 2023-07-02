function printTowns(data) {

  data.reduce((townsData, townInfo) => {
    let [town, latitude, longitude] = townInfo.split(' | ');
    townsData.push(
      {
        town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
      }
    );
    return townsData;
  }, []) // parse "data" array to array of objects => [{..}, {..}, {..}]
    .forEach(town => {
      console.log(town)
    });

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