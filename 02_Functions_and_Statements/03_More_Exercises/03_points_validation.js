function pointsValidation(numbers) {
  [x1, y1, x2, y2] = [...numbers]

  function isValid(x, y) {
    return Number.isInteger(Math.sqrt(x ** 2 + y ** 2));
  }

  function printValidity(point1, point2, isValid) {
    const validity = isValid ? 'valid' : 'invalid';
    console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is ${validity}`);
  }

  let origin = { x: 0, y: 0 };
  let point1 = { x: x1, y: y1 };
  let point2 = { x: x2, y: y2 };


  printValidity(point1, origin, isValid(point1.x, point1.y))
  printValidity(point2, origin, isValid(point2.x, point2.y))
  printValidity(point1, point2, isValid(point2.x - point1.x, point2.y - point1.y));
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);