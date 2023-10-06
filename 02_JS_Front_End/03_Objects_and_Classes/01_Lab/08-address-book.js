function sortedAddressBook(data) {
  let addressBook = {}

  for (const row of data) {
    let [name, address] = row.split(':')
    addressBook[name] = address;
  }

  let sortedAddressBook = Object.entries(addressBook)
    .sort((nameA, nameB) => {
      return nameA[0].localeCompare(nameB[0])
    })

  for (const [name, address] of sortedAddressBook) {
    console.log(`${name} -> ${address}`)
  }

}

sortedAddressBook(
  [
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
  ]
)

sortedAddressBook(
  [
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
  ]
)