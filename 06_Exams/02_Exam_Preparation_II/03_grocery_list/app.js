function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

  const inputDOMSelectors = {
    product: document.querySelector('#product'),
    count: document.querySelector('#count'),
    price: document.querySelector('#price'),
  };

  const buttonDOMSelectors = {
    addProductBtn: document.querySelector('#add-product'),
    updateProductBtn: document.querySelector('#update-product'),
    loadProductBtn: document.querySelector('#load-product'),
  };

  const otherDOMSelectors = {
    tbody: document.querySelector('#tbody'),
  }

  let productToEdit = null;

  buttonDOMSelectors.loadProductBtn.addEventListener('click', loadProductHandler);
  buttonDOMSelectors.addProductBtn.addEventListener('click', addProductHandler);
  buttonDOMSelectors.updateProductBtn.addEventListener('click', updateProductHandler);

  async function loadProductHandler(e) {
    if (e) {
      e.preventDefault();
    }

    otherDOMSelectors.tbody.innerHTML = '';

    const productsRes = await fetch(BASE_URL);
    const products = await productsRes.json();

    for (const { product, count, price, _id } of Object.values(products)) {
      const tr = createElement('tr', null, otherDOMSelectors.tbody, _id);
      createElement('td', product, tr, null, ['name']);
      createElement('td', count, tr, null, ['count-product']);
      createElement('td', price, tr, null, ['product-price']);
      const td = createElement('td', null, tr, null, ['btn']);
      const updateBtn = createElement('button', 'Update', td, null, ['update']);
      const deleteBtn = createElement('button', 'Delete', td, null, ['delete']);

      deleteBtn.addEventListener('click', deleteProductHandler);
      updateBtn.addEventListener('click', (e) => {
        buttonDOMSelectors.updateProductBtn.disabled = false;
        buttonDOMSelectors.addProductBtn.disabled = true;

        const parent = e.currentTarget.parentNode.parentNode;
        productToEdit = parent.id;
        inputDOMSelectors.product.value = parent.children[0].textContent;
        inputDOMSelectors.count.value = parent.children[1].textContent;
        inputDOMSelectors.price.value = parent.children[2].textContent;
      });
    }
  }

  function addProductHandler(e) {
    if (e) {
      e.preventDefault();
    }

    const { product, count, price } = inputDOMSelectors;
    httpHandlers = {
      method: 'POST',
      body: JSON.stringify({ product: product.value, count: count.value, price: price.value }),
    }
    fetch(BASE_URL, httpHandlers)
      .then(() => {
        clearAllInputs();
        loadProductHandler();
      })
      .catch(err => console.log(err))
  }

  function deleteProductHandler() {
    const id = this.parentNode.parentNode.id;
    const httpHandlers = {
      method: 'DELETE'
    }

    fetch(BASE_URL + id, httpHandlers)
      .then(() => loadProductHandler())
      .catch(err => console.log(err))
  }

  function updateProductHandler(e) {
    if (e) {
      e.preventDefault();
    }

    const { product, count, price } = inputDOMSelectors;
    const httpHandlers = {
      method: 'PATCH',
      body: JSON.stringify({
        product: product.value,
        count: count.value,
        price: price.value
      })
    }

    fetch(BASE_URL + productToEdit, httpHandlers)
      .then(() => {
        loadProductHandler();
        clearAllInputs();
        productToEdit = null;
        buttonDOMSelectors.updateProductBtn.disabled = true;
        buttonDOMSelectors.addProductBtn.disabled = false;
      })
      .catch((err) => console.log(err))
  }

  function clearAllInputs() {
    Object.values(inputDOMSelectors)
      .forEach(input => input.value = '');
  }

  function createElement(type, content, parentNode, id, classes, attributes, useInnerHtml) {
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

attachEvents();