class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = {
      engine: parts.engine,
      power: parts.power,
      quality: parts.engine * parts.power,
    };
    this.fuel = fuel;
  }

  drive(fuelLost) {
    this.fuel -= fuelLost;
  }

}

// Test input 1
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

// Test input 2
let partsA = { engine: 9, power: 500 };
let vehicleA = new Vehicle('l', 'k', partsA, 840);
vehicleA.drive(20);
console.log(vehicleA.fuel);