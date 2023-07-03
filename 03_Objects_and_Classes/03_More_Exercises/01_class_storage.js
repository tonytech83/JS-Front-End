class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
    this.totalCost = 0
  }

  addProduct(product) {
    this.storage.push(product);
    this.capacity -= product.quantity
    this.totalCost += product.price * product.quantity
  }

  getProducts() {
    return this.storage
      .map((product) => JSON.stringify(product)).join('\n');
  }

}

// Test input 1
let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

// Test input 2
let newProductOne = { name: 'Tomato', price: 0.90, quantity: 19 };
let newProductTwo = { name: 'Potato', price: 1.10, quantity: 10 };
let newStorage = new Storage(30);
newStorage.addProduct(newProductOne);
newStorage.addProduct(newProductTwo);
console.log(newStorage.totalCost);