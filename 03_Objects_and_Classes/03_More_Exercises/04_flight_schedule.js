function flightSchedule(data) {
  let [flights, changedStatuses, checkedStatus] = data
  let allFlights = {};

  flights
    .forEach(line => {
      let [flightNumber, destination] = line.split(' ')
      allFlights[flightNumber] = [destination, 'Ready to fly']
    });

  changedStatuses
    .forEach(line => {
      let [flightNumber, newStatus] = line.split(' ')
      if (allFlights.hasOwnProperty(flightNumber)) {
        allFlights[flightNumber][1] = newStatus
      }
    })

  if (checkedStatus[0] === 'Cancelled') {
    Object.entries(allFlights)
      .filter(flight => flight[1][1] === 'Cancelled')
      .forEach(flight => console.log(`{ Destination: '${flight[1][0]}', Status: '${flight[1][1]}' }`))
  } else {
    Object.entries(allFlights)
      .filter(flight => flight[1][1] === 'Ready to fly')
      .forEach(flight => console.log(`{ Destination: '${flight[1][0]}', Status: '${flight[1][1]}' }`))
  }
}

flightSchedule(
  [
    [
      'WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'
    ],
    [
      'DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK430 Cancelled'
    ],
    [
      'Cancelled'
    ]
  ]
);

flightSchedule(
  [
    [
      'WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'
    ],
    [
      'DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK330 Cancelled'
    ],
    [
      'Ready to fly'
    ]
  ]
)