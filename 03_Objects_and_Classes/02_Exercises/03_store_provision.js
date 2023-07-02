function storeProvision(current, ordered) {

  let currentAndOrdered = [...current, ...ordered];
  let store = {};

  for (let idx = 0; idx < currentAndOrdered.length; idx += 2) {
    let product = currentAndOrdered[idx];
    let quantity = Number(currentAndOrdered[idx + 1])
    if (!store.hasOwnProperty(product)) {
      store[product] = 0;
    }
    store[product] += quantity;
  }


  Object.entries(store)
    .forEach(([product, quantity]) => {
      console.log(`${product} -> ${quantity}`);
    })

}

storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);

storeProvision(
  ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
  ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);