function matrix(n) {

  return new Array(n).fill(new Array(n).fill(n)) // creates array of arrays 
    .forEach(row => console.log(row.join(' ')))

}

matrix(7);
matrix(3);