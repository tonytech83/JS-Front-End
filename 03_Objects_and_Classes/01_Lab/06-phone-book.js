function phoneBookParser(data) {
  let phoneBook = {};

  for (const row of data) {
    let [name, mobileNumber] = row.split(' ')
    phoneBook[name] = mobileNumber
  }

  Object.entries(phoneBook)
    .forEach(([key, value]) => {
      console.log(`${key} -> ${value}`);
    })
}

phoneBookParser(
  [
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
  ]
);

phoneBookParser(
  [
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
  ]
);

