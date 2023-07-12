function solve() {
  const addButtons = Array.from(document.getElementsByClassName('add-product'));
  const textarea = document.getElementsByTagName('textarea')[0];
  const checkoutBtn = document.getElementsByClassName('checkout')[0];
  let totalPrice = 0;
  let boughItems = new Set();

  addButtons
    .forEach(button => button.addEventListener('click', addHandler))

  checkoutBtn.addEventListener('click', checkoutHandler);

  function addHandler(event) {
    const divProduct = event.target.parentNode.parentNode;
    const price = divProduct.querySelector('.product-line-price').textContent
    const name = divProduct.querySelector('.product-title').textContent

    boughItems.add(name)
    totalPrice += Number(price);
    textarea.textContent += `Added ${name} for ${price} to the cart.\n`;
  }

  function checkoutHandler() {
    textarea.textContent += `You bought ${Array.from(boughItems).join(', ')} for ${totalPrice.toFixed(2)}.`;

    checkoutBtn.disabled = true;
    addButtons
      .forEach(button => {
        button.disabled = true;
      })
  }
}