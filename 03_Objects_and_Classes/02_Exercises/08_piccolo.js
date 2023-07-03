function carParking(data) {
  cars = new Set();

  data
    .forEach((car_data) => {
      let [action, carNumber] = car_data.split(', ');
      if (action === 'IN') {
        cars.add(carNumber);
      } else {
        cars.delete(carNumber);
      }
    });

  if (cars.size > 0) {
    console.log(
      Array.from(cars)
        .sort((a, b) => a.localeCompare(b))
        .join('\n')
    )
  } else {
    console.log('Parking Lot is Empty')
  }

}

carParking(
  [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
  ]
);

carParking(
  [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
  ]
);