window.addEventListener("load", solve);

function solve() {
  const storyState = {
    firstNameInput: null,
    lastNameInput: null,
    ageInput: null,
    storyTitleInput: null,
    genreInput: null,
    storyInput: null,
  }

  const inputDOMSelectors = {
    firstNameInput: document.getElementById("first-name"),
    lastNameInput: document.getElementById("last-name"),
    ageInput: document.getElementById("age"),
    storyTitleInput: document.getElementById("story-title"),
    genreInput: document.getElementById("genre"),
    storyInput: document.getElementById("story"),
  }

  const otherDOMSelectors = {
    publishBtn: document.getElementById("form-btn"),
    previewList: document.getElementById("preview-list"),
    mainDiv: document.getElementById('main'),
  }

  otherDOMSelectors.publishBtn.addEventListener('click', publishHandler);

  function publishHandler() {
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '');

    if (!allInputsHasValue) {
      return;
    }

    const { firstNameInput, lastNameInput, ageInput, storyTitleInput, genreInput, storyInput } = inputDOMSelectors;
    const storyInfo = createElement('li', null, otherDOMSelectors.previewList, null, ['story-info'])
    const article = createElement('article', '', storyInfo);
    createElement('h4', `Name: ${firstNameInput.value} ${lastNameInput.value}`, article);
    createElement('p', `Age: ${ageInput.value}`, article);
    createElement('p', `Title: ${storyTitleInput.value}`, article);
    createElement('p', `Genre: ${genreInput.value}`, article);
    createElement('p', storyInput.value, article);
    const saveBtn = createElement('button', 'Save Story', storyInfo, null, ['save-btn']);
    const editBtn = createElement('button', 'Edit Story', storyInfo, null, ['edit-btn']);
    const deleteBtn = createElement('button', 'Delete Story', storyInfo, null, ['delete-btn']);

    saveBtn.addEventListener('click', saveStory);
    editBtn.addEventListener('click', editStory);
    deleteBtn.addEventListener('click', deleteStory);

    for (const key in inputDOMSelectors) {
      storyState[key] = inputDOMSelectors[key].value;
    }

    clearAllInputs();
    otherDOMSelectors.publishBtn.disabled = true;
  }

  function saveStory() {
    otherDOMSelectors.mainDiv.innerHTML = '';
    createElement('h1', 'Your scary story is saved!', otherDOMSelectors.mainDiv)
  }

  function editStory() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = storyState[key];
    }

    // remove list item from preview-list and enable publishBtn
    otherDOMSelectors.publishBtn.disabled = false;
    otherDOMSelectors.previewList.innerHTML = '';
    createElement('h3', 'Preview', otherDOMSelectors.previewList);
  }

  function deleteStory(event) {
    const parent = event.currentTarget.parentElement;
    parent.remove();
    otherDOMSelectors.publishBtn.disabled = false;
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
