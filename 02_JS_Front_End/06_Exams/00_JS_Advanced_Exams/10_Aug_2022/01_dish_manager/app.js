window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    genderSelect: document.getElementById('genderSelect'),
    taskDesc: document.getElementById('task'),
  };

  otherDOMSelectors = {
    submitBtn: document.getElementById('form-btn'),
    inProgressList: document.getElementById('in-progress'),
    finishedList: document.getElementById('finished'),
    form: document.getElementsByTagName('form')[0],
    progressCount: document.getElementById('progress-count'),
    clearBtn: document.getElementById('clear-btn'),
  };

  let task = {
    firstName: null,
    lastName: null,
    age: null,
    genderSelect: null,
    taskDesc: null,
  };

  otherDOMSelectors.submitBtn.addEventListener("click", submitTask);
  otherDOMSelectors.clearBtn.addEventListener('click', clearTasks);

  function submitTask() {
    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [firstName, lastName, age, genderSelect, taskDesc] = Object.values(inputDOMSelectors);
    const li = createElement('li', otherDOMSelectors.inProgressList, null, null, ['each-line']);
    const article = createElement('article', li);
    createElement('h4', article, `${firstName.value} ${lastName.value}`);
    createElement('p', article, `${genderSelect.value}, ${age.value}`);
    createElement('p', article, `Dish description: ${taskDesc.value}`);
    const editBtn = createElement('button', li, 'Edit', null, ['edit-btn']);
    const completeBtn = createElement('button', li, 'Mark as complete', null, ['complete-btn']);

    editBtn.addEventListener('click', editTask);
    completeBtn.addEventListener('click', completeTask);

    task = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      genderSelect: genderSelect.value,
      taskDesc: taskDesc.value,
    };

    otherDOMSelectors.progressCount.textContent = Number(otherDOMSelectors.progressCount.textContent) + 1;
    otherDOMSelectors.form.reset();
  }

  function editTask(e) {
    e.currentTarget.parentNode.remove();
    otherDOMSelectors.progressCount.textContent = Number(otherDOMSelectors.progressCount.textContent) - 1;

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = task[key];
    }
  }

  function completeTask(e) {
    const article = e.currentTarget.parentNode.getElementsByTagName('article')[0];
    const li = createElement('li', otherDOMSelectors.finishedList, null, null, ['each-line']);
    li.appendChild(article);
    otherDOMSelectors.progressCount.textContent = Number(otherDOMSelectors.progressCount.textContent) - 1;
    e.currentTarget.parentNode.remove();
  }

  function clearTasks() {
    otherDOMSelectors.finishedList.innerHTML = '';
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
