function convertToJSON(firstName, lastName, hairColor) {
  let person = {name: firstName, lastName, hairColor}
  return JSON.stringify(person)
}

console.log(convertToJSON('George', 'Jones', 'Brown'));