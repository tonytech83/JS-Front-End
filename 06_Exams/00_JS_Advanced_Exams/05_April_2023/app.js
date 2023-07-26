window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    gemName: document.getElementById('gem-name'),
    color: document.getElementById('color'),
    carats: document.getElementById('carats'),
    price: document.getElementById('price'),
    type: document.getElementById('type'),
  };

  otherDOMSelectors = {
    addBtn: document.getElementById('add-btn'),
    previewList: document.getElementById('preview-list'),
    collectionList: document.getElementById('collection'),
    form: document.getElementsByTagName('form')[0],
  };

  const gem = {
    gemName: null,
    color: null,
    carats: null,
    price: null,
    type: null,
  }

  otherDOMSelectors.addBtn.addEventListener("click", addGem);

  function addGem() {
    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [gemName, color, carats, price, type] = Object.values(inputDOMSelectors);
    const li = createElement('li', otherDOMSelectors.previewList, null, null, ['gem-info']);
    const article = createElement('article', li);
    createElement('h4', article, gemName.value);
    createElement('p', article, `Color: ${color.value}`);
    createElement('p', article, `Carats: ${carats.value}`);
    createElement('p', article, `Price: ${price.value}$`);
    createElement('p', article, `Type: ${type.value}`);
    const saveBtn = createElement('button', li, 'Save to Collection', null, ['save-btn']);
    const editBtn = createElement('button', li, 'Edit Information', null, ['edit-btn']);
    const cancelBtn = createElement('button', li, 'Cancel', null, ['cancel-btn']);

    editBtn.addEventListener('click', editGemInfo);
    saveBtn.addEventListener('click', addGemToCollection);
    cancelBtn.addEventListener('click', cancelGemOrder);

    for (const key in inputDOMSelectors) {
      gem[key] = inputDOMSelectors[key].value;
    }

    otherDOMSelectors.form.reset();
    otherDOMSelectors.addBtn.disabled = true;
  }

  function editGemInfo() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = gem[key];
    }
    otherDOMSelectors.addBtn.disabled = false;
    otherDOMSelectors.previewList.innerHTML = '';
  }

  function addGemToCollection() {
    otherDOMSelectors.previewList.innerHTML = '';
    otherDOMSelectors.addBtn.disabled = false;
    const [gemName, color, carats, price, type] = Object.values(gem);
    const li = createElement('li', otherDOMSelectors.collectionList);
    const content = `${gemName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
    createElement('p', li, content, null, ['collection-item']);
  }

  function cancelGemOrder() {
    otherDOMSelectors.previewList.innerHTML = '';
    otherDOMSelectors.addBtn.disabled = false;
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
