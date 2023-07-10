function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));

  const tBody = document.querySelector('.table > tbody')

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);

    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement('tr', '', tBody);

      const imgTd = createElement('td', '', tableRow);
      createElement('img', '', imgTd, '', '', { src: img });

      const nameTd = createElement('td', '', tableRow);
      createElement('p', name, nameTd);

      const priceTd = createElement('td', '', tableRow);
      createElement('p', price, priceTd);

      const factorTd = createElement('td', '', tableRow);
      createElement('p', decFactor, factorTd);

      const checkTd = createElement('td', '', tableRow);
      createElement('input', '', checkTd, '', '', { type: 'checkbox' })
    }
  }



  function buyHandler() {
    const allCheckedInputs = Array.from(document.querySelectorAll('tbody > tr > td > input:checked'))
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    for (const input of allCheckedInputs) {
      const tableRow = input.parentElement.parentElement;
      const [_, nameTd, priceTd, factorTd] = Array.from(tableRow.children);

      boughtItems.push(nameTd.children[0].textContent)
      totalPrice += Number(priceTd.children[0].textContent)
      totalDecorationFactor += Number(factorTd.children[0].textContent)
    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
    buyTextArea.value += `Average decoration factor: ${totalDecorationFactor / allCheckedInputs.length}`
  }


  // type -> string
  // content -> string (text Content)
  // id -> string
  // classes -> array of strings
  // attributes -> object

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type)

    if (content && type != 'input') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    // if (content && type != 'input') {
    //   htmlElement.value = content;
    // }

    if (id) {
      htmlElement.id = id;
    }

    // ['list', 'item', ...]
    if (classes) {
      htmlElement.classList.add(...classes)
    }

    // { src: 'link to image', href: 'link to site', ... }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;

  }
}