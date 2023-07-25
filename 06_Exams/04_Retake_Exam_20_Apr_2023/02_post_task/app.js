window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    taskTitle: document.getElementById('task-title'),
    taskCategory: document.getElementById('task-category'),
    taskContent: document.getElementById('task-content'),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById('publish-btn'),
    reviewList: document.getElementById('review-list'),
    publishedList: document.getElementById('published-list'),
    newPostContent: document.querySelector('.newPostContent'),
  };

  const tasks = {
    taskTitle: null,
    taskCategory: null,
    taskContent: null,
  }

  let taskId = 1;

  otherDOMSelectors.publishBtn.addEventListener('click', createTask);

  function createTask() {
    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [title, category, content] = Object.values(inputDOMSelectors);
    const li = createElement('li', otherDOMSelectors.reviewList, null, taskId, ['rpost']);
    const article = createElement('article', li);
    createElement('h4', article, title.value);
    createElement('p', article, `Category: ${category.value}`);
    createElement('p', article, `Content: ${content.value}`);
    const editBtn = createElement('button', li, 'Edit', null, ['action-btn', 'edit']);
    const postBtn = createElement('button', li, 'Post', null, ['action-btn', 'post']);

    editBtn.addEventListener('click', editTask);
    postBtn.addEventListener('click', postTask)

    tasks[taskId] = {
      taskTitle: title.value,
      taskCategory: category.value,
      taskContent: content.value,
    }

    otherDOMSelectors.newPostContent.reset();
    taskId++;
  }

  function editTask(e) {
    const taskId = e.currentTarget.parentNode.id;

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = tasks[taskId][key];

    }

    e.currentTarget.parentNode.remove();

  }

  function postTask(e) {
    const article = e.currentTarget.parentNode.getElementsByTagName('article')[0];
    const li = createElement('li', otherDOMSelectors.publishedList, null, null, ['rpost']);
    li.appendChild(article);
    e.currentTarget.parentNode.remove();
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