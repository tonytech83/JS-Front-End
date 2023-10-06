window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    carModel: document.getElementById('car-model'),
    carYear: document.getElementById('car-year'),
    partName: document.getElementById('part-name'),
    partNumber: document.getElementById('part-number'),
    condition: document.getElementById('condition'),
  };

  otherDOMSelectors = {
    nextBtn: document.getElementById('next-btn'),
    infoList: document.querySelector('.info-list'),
    confirmList: document.querySelector('.confirm-list'),
    form: document.getElementsByTagName('form')[0],
    completeImg: document.querySelector('#complete-order > img'),
    completeText: document.getElementById('complete-text'),
  };

  const order = {
    carModel: null,
    carYear: null,
    partName: null,
    partNumber: null,
    condition: null,
  };

  otherDOMSelectors.nextBtn.addEventListener('click', nextHandler);

  function nextHandler(e) {
    if (e) {
      e.preventDefault();
    }

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }
    if (inputDOMSelectors.carYear.value < 1980 || inputDOMSelectors.carYear.value > 2023) {
      return;
    }

    const [carModel, carYear, partName, partNumber, condition] = Object.values(inputDOMSelectors);
    const li = createElement('li', otherDOMSelectors.infoList, null, null, ['part-content']);
    const article = createElement('article', li);
    createElement('p', article, `Car Model: ${carModel.value}`);
    createElement('p', article, `Car Year: ${carYear.value}`);
    createElement('p', article, `Part Name: ${partName.value}`);
    createElement('p', article, `Part Number: ${partNumber.value}`);
    createElement('p', article, `Condition: ${condition.value}`)
    const editBtn = createElement('button', li, 'Edit', null, ['edit-btn']);
    const continueBtn = createElement('button', li, 'Continue', null, ['continue-btn']);

    editBtn.addEventListener('click', editOrder);
    continueBtn.addEventListener('click', continueOrder);

    for (const key in order) {
      order[key] = inputDOMSelectors[key].value;
    }


    otherDOMSelectors.form.reset();
    otherDOMSelectors.nextBtn.disabled = true;
  }

  function editOrder() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = order[key];
    }

    otherDOMSelectors.infoList.innerHTML = '';
    otherDOMSelectors.nextBtn.disabled = false;
  }

  function continueOrder(e) {
    const article = e.currentTarget.parentNode.getElementsByTagName('article')[0];
    const li = createElement('li', otherDOMSelectors.confirmList, null, null, ['part-content']);
    li.appendChild(article)
    const confirmBtn = createElement('button', li, 'Confirm', null, ['confirm-btn']);
    const cancelBtn = createElement('button', li, 'Cancel', null, ['cancel-btn']);

    confirmBtn.addEventListener('click', confirmOrder);
    cancelBtn.addEventListener('click', cancelOrder);

    otherDOMSelectors.infoList.innerHTML = '';
  }

  function confirmOrder() {
    otherDOMSelectors.confirmList.innerHTML = '';
    otherDOMSelectors.nextBtn.disabled = false;
    otherDOMSelectors.completeImg.style.visibility = 'visible';
    otherDOMSelectors.completeText.textContent = 'Part is Ordered!';
  }

  function cancelOrder() {
    otherDOMSelectors.confirmList.innerHTML = '';
    otherDOMSelectors.nextBtn.disabled = false;
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
};

