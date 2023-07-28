window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    productType: document.getElementById('type-product'),
    description: document.getElementById('description'),
    clientName: document.getElementById('client-name'),
    clientPhone: document.getElementById('client-phone'),
  };

  const otherDOMSelectors = {
    sendBtn: document.querySelector('#right > form > button'),
    receivedOrders: document.getElementById('received-orders'),
    completedOrders: document.getElementById('completed-orders'),
    inputForm: document.querySelector('#right > form'),
    clearBtn: document.querySelector('#completed-orders > button'),
  };

  otherDOMSelectors.sendBtn.addEventListener('click', sendOrder);
  otherDOMSelectors.clearBtn.addEventListener('click', clearComplectedOrders)

  function sendOrder(e) {
    e.preventDefault();

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [productType, description, clientName, clientPhone] = Object.values(inputDOMSelectors);
    const divContainer = createElement('div', otherDOMSelectors.receivedOrders, null, null, ['container']);
    createElement('h2', divContainer, `Product type for repair: ${productType.value}`);
    createElement('h3', divContainer, `Client information: ${clientName.value}, ${clientPhone.value}`);
    createElement('h4', divContainer, `Description of the problem: ${description.value}`);
    const startBtn = createElement('button', divContainer, 'Start repair', null, ['start-btn']);
    const finishBtn = createElement('button', divContainer, 'Finish repair', null, ['finish-btn'], { 'disabled': 'true' });

    startBtn.addEventListener('click', startRepair);
    finishBtn.addEventListener('click', finishRepair);

    otherDOMSelectors.inputForm.reset();
    orderId++;
  }

  function startRepair(e) {
    e.currentTarget.disabled = true;
    e.currentTarget.parentNode.lastChild.disabled = false;
  }

  function finishRepair(e) {
    const [h2, h3, h4, _startBtn, _FinishBtn] = Array.from(e.currentTarget.parentNode.children)
    const divContainer = createElement('div', otherDOMSelectors.completedOrders, null, null, ['container']);
    divContainer.appendChild(h2);
    divContainer.appendChild(h3);
    divContainer.appendChild(h4);

    e.currentTarget.parentNode.remove();
  }

  function clearComplectedOrders(e) {
    const children = Array.from(e.currentTarget.parentNode.children)
    for (const child of children) {
      if (child.classList.contains('container')) {
        child.remove();
      }
    }
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