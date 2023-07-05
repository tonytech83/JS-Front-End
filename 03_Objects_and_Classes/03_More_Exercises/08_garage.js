function storesCars(data) {
  garages = {};

  data
    .forEach(line => {
      let [garageNumber, carInfo] = line.split(' - ')
      if (!garages.hasOwnProperty(garageNumber)) {
        garages[garageNumber] = [];
      }
      let carData = carInfo.split(', ')
      let car = []
      carData
        .forEach(line => {
          let [property, value] = line.split(': ')
          car.push(`${property} - ${value}`)
        })
      garages[garageNumber].push(car)
    })

  Object.entries(garages)
    .forEach(garage => {
      console.log(`Garage № ${garage[0]}`)
      garage[1]
        .forEach(row => {
          console.log(`--- ${row.join(', ')}`)
        })
    })
}

storesCars(
  [
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
  ]
)

storesCars(
  [
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
  ]
)