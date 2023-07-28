function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById('fname'),
    lastName: document.getElementById('lname'),
    email: document.getElementById('email'),
    birth: document.getElementById('birth'),
    position: document.getElementById('position'),
    salary: document.getElementById('salary'),
  }

  otherDOMSelectors = {
    hireWorker: document.getElementById('add-worker'),
    inputForm: document.querySelector('#signup > form'),
    table: document.querySelector('#tbody'),
    salarySum: document.querySelector('#sum'),
  }

  let workersDB = {};
  let workerId = 1;

  otherDOMSelectors.hireWorker.addEventListener('click', addWorker);

  function addWorker(e) {
    e.preventDefault();

    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '')

    if (!allInputsHasValue) {
      return;
    }

    const [firstName, lastName, email, birth, position, salary] = Object.values(inputDOMSelectors);
    const trEl = createElement('tr', otherDOMSelectors.table, null, workerId);
    createElement('td', trEl, firstName.value);
    createElement('td', trEl, lastName.value);
    createElement('td', trEl, email.value);
    createElement('td', trEl, birth.value);
    createElement('td', trEl, position.value);
    createElement('td', trEl, salary.value);
    const trBtn = createElement('tr', trEl);
    const firedBtn = createElement('button', trBtn, 'Fired', null, ['fired']);
    const editBtn = createElement('button', trBtn, 'Edit', null, ['edit']);

    editBtn.addEventListener('click', editWorkerInfo);
    firedBtn.addEventListener('click', firedWorker);

    workersDB[workerId] = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      birth: birth.value,
      position: position.value,
      salary: salary.value
    }

    workerId++;
    otherDOMSelectors.salarySum
      .textContent = (Number(otherDOMSelectors.salarySum.textContent) + Number(salary.value)).toFixed(2);
    otherDOMSelectors.inputForm.reset();
  }

  function editWorkerInfo(e) {
    const workerId = e.currentTarget.parentNode.parentNode.id;
    e.currentTarget.parentNode.parentNode.remove();

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = workersDB[workerId][key];
    }

    otherDOMSelectors.salarySum
      .textContent = (Number(otherDOMSelectors.salarySum.textContent) - Number(workersDB[workerId]['salary'])).toFixed(2);
  }

  function firedWorker(e) {
    const workerId = e.currentTarget.parentNode.parentNode.id;
    e.currentTarget.parentNode.parentNode.remove();
    otherDOMSelectors.salarySum
      .textContent = (Number(otherDOMSelectors.salarySum.textContent) - Number(workersDB[workerId]['salary'])).toFixed(2);
    delete workersDB[workerId];
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

solve()