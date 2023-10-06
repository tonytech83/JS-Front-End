window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById('publish'),
    form: document.getElementsByTagName('form')[0],
    tableBody: document.getElementById('table-body'),
    carList: document.getElementById('cars-list'),
    profit: document.getElementById('profit'),
  };

  let totalProfit = 0;
  let post = {
    make: null,
    model: null,
    year: null,
    fuel: null,
    originalCost: null,
    sellingPrice: null,
  }

  otherDOMSelectors.publishBtn.addEventListener("click", publishOffer);

  function publishOffer(e) {
    if (e) {
      e.preventDefault();
    }

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    if (Number(inputDOMSelectors.sellingPrice.value) <= Number(inputDOMSelectors.originalCost.value)) {
      return;
    }

    const [make, model, year, fuel, originalCost, sellingPrice] = Object.values(inputDOMSelectors);
    const trElement = createElement('tr', otherDOMSelectors.tableBody, null, null, ['row']);
    createElement('td', trElement, make.value);
    createElement('td', trElement, model.value);
    createElement('td', trElement, year.value);
    createElement('td', trElement, fuel.value);
    createElement('td', trElement, originalCost.value);
    createElement('td', trElement, sellingPrice.value);
    const tdElement = createElement('td', trElement);
    const editBtn = createElement('button', tdElement, 'Edit', null, ['action-btn', 'edit']);
    const sellBtn = createElement('button', tdElement, 'Sell', null, ['action-btn', 'sell']);

    editBtn.addEventListener('click', editPost);
    sellBtn.addEventListener('click', sellPost);

    post = {
      make: make.value,
      model: model.value,
      year: year.value,
      fuel: fuel.value,
      originalCost: originalCost.value,
      sellingPrice: sellingPrice.value,
    }

    otherDOMSelectors.form.reset();
    inputDOMSelectors.year.value = '';
    inputDOMSelectors.fuel.value = '';

  }

  function editPost(e) {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = post[key];
    }

    e.currentTarget.parentNode.parentNode.remove();
  }

  function sellPost(e) {
    const [make, model, year, _fuel, originalCost, sellingPrice] = Array.from(e.currentTarget.parentNode.parentNode.children)
    const profit = Number(sellingPrice.textContent) - Number(originalCost.textContent);
    const li = createElement('li', otherDOMSelectors.carList, null, null, ['each-list']);
    createElement('span', li, `${make.textContent} ${model.textContent}`, null, null, null, true);
    createElement('span', li, `${year.textContent}`, null, null, null, true);
    createElement('span', li, `${profit}`, null, null, null, true);
    totalProfit += profit;

    e.currentTarget.parentNode.parentNode.remove();
    otherDOMSelectors.profit.textContent = `${totalProfit.toFixed(2)}`
  }

  function createElement(type, parentNode, content, id, classes, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type)

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type != 'input') {
        htmlElement.textContent = content;
      }

      if (content && type === 'input') {
        htmlElement.value = content;
      }
    }

    if (id) {
      htmlElement.id = id;
    }

    // ['list', 'item', ...]
    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes)
    }

    // { src: 'link to image', href: 'link to site', ... }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;

  }
}

