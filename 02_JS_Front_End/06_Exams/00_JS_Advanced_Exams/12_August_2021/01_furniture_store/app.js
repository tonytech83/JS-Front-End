window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    description: document.getElementById('description'),
    price: document.getElementById('price'),
  };

  otherDOMSelectors = {
    addBtn: document.getElementById('add'),
    inputForm: document.getElementsByTagName('form')[0],
    furnitureList: document.getElementById('furniture-list'),
    totalPrice: document.querySelector('#information > tfoot > tr > td.total-price'),
  };

  let moreInfoClicked = false;


  otherDOMSelectors.addBtn.addEventListener('click', addItem);

  function addItem(e) {
    if (e) {
      e.preventDefault();
    }

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [model, year, description, price] = Object.values(inputDOMSelectors);
    if (Number(year.value) <= 0 || Number(price.value) <= 0) {
      return;
    }

    const info = createElement('tr', otherDOMSelectors.furnitureList, null, null, ['info']);
    createElement('td', info, `${model.value}`);
    createElement('td', info, `${Number(price.value).toFixed(2)}`);
    const tdEl = createElement('td', info);
    const moreBtn = createElement('button', tdEl, 'More Info', null, ['moreBtn']);
    const buyBtn = createElement('button', tdEl, 'Buy it', null, ['buyBtn']);
    const hide = createElement('tr', otherDOMSelectors.furnitureList, null, null, ['hide']);
    createElement('td', hide, `Year: ${year.value}`);
    createElement('td', hide, `Description: ${description.value}`, null, null, { 'colspan': '3' });

    moreBtn.addEventListener('click', furtherInfo);
    buyBtn.addEventListener('click', buyFurther);

    otherDOMSelectors.inputForm.reset();
  }

  function furtherInfo(e) {
    // TODO: when have more than one added item "More Info" button didn't work properly!!!!
    const parent = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.hide');

    if (moreInfoClicked) {
      parent.style.display = 'none';
      moreInfoClicked = false;
      e.currentTarget.textContent = 'More Info';
    } else {
      parent.style.display = 'contents';
      moreInfoClicked = true;
      e.currentTarget.textContent = 'Less Info';
    }
  }

  function buyFurther(e) {
    const furnitureList = Array.from(e.currentTarget.parentNode.parentNode.parentNode.children);
    const parentIdx = furnitureList.indexOf(e.currentTarget.parentNode.parentNode);
    const [_model, price] = Array.from(furnitureList[parentIdx].children);

    for (let idx = parentIdx; idx < parentIdx + 2; idx++) {
      furnitureList[idx].remove();
    }

    otherDOMSelectors.totalPrice.textContent = (Number(otherDOMSelectors.totalPrice.textContent) + Number(price.textContent)).toFixed(2);
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

