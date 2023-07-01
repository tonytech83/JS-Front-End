function cats(data) {

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let catsArr = [];
  for (const line of data) {
    let [name, age] = line.split(' ')
    catsArr.push(new Cat(name, age))
  }

  catsArr.forEach(cat => cat.meow())
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);