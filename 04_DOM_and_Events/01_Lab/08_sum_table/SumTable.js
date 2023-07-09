function sumTable() {
  const productsCost = Array.from(document.querySelectorAll('td:nth-child(even)'));
  const sum = document.getElementById('sum')

  let total = 0;

  productsCost
    .forEach((price) => {
      if (!price.id) {
        total += Number(price.textContent)
      }
    })

    sum.textContent = total;
}
