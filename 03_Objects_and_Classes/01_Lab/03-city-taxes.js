function cityTaxes(name, population, treasury) {
  let city = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function () {
      this.treasury += (this.population * this.taxRate)
    },
    applyGrowth: function (percentage) {
      this.population *= (1 + percentage / 100)
    },
    applyRecession: function (percentage) {
      this.treasury *= (1 - percentage / 100)
    }
  }

  return city;

}

const city =
  cityTaxes('Tortuga',
    7000,
    15000);

console.log(city);   

// const city = cityTaxes
//   (
//     'Tortuga',
//     7000,
//     15000
//   );
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);