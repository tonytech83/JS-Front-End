function convertToObject(jsonStr) {
  let newObject = JSON.parse(jsonStr);

  for (const key in newObject) {
    console.log(`${key}: ${newObject[key]}`)
  };

}

// Comes form the server
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');


