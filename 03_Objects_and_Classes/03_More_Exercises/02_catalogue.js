function sortingCatalogue(data) {
  let catalogue = {};

  data
    .forEach(line => {
      let [product, quantity] = line.split(' : ');
      let firstLetter = product.charAt(0)
      if (!catalogue.hasOwnProperty(firstLetter)) {
        catalogue[firstLetter] = [];
      }
      catalogue[firstLetter].push(`${product}: ${quantity}`);
    })

  Object.entries(catalogue)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(line => {
      console.log(line[0]);
      line[1]
        .sort((a, b) => a.localeCompare(b))
        .forEach(product => console.log(`  ${product}`))
    })
}

sortingCatalogue(
  [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]
);

sortingCatalogue(
  [
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
  ]
);