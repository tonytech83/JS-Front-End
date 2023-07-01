function scheduleMeetings(data) {
  let meetings = {};

  for (const row of data) {
    let [day, name] = row.split(' ')
    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`)
    } else {
      console.log(`Conflict on ${day}!`)
    }
  }

  Object.entries(meetings)
    .forEach(([key, value]) => {
      console.log(`${key} -> ${value}`);
    })
}

scheduleMeetings(
  [
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
  ]
);

scheduleMeetings(
  [
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
  ]
);