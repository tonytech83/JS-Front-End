function solve() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

  const inputDOMSelectors = {
    name: document.getElementById('name'),
    days: document.getElementById('num-days'),
    date: document.getElementById('from-date'),
  };

  const loadVacationsBtn = document.getElementById('load-vacations');
  const addVacationBtn = document.getElementById('add-vacation');
  const vacationsList = document.getElementById('list');
  const editVacationBtn = document.getElementById('edit-vacation');
  let vacationsDB = {};
  let vacIdToEdit = null;

  loadVacationsBtn.addEventListener('click', loadAllVacations);
  addVacationBtn.addEventListener('click', addNewVacation);
  editVacationBtn.addEventListener('click', editVacation);

  function loadAllVacations() {
    vacationsList.innerHTML = '';

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        for (const { date, days, name, _id } of Object.values(data)) {
          const divContainer = createElement('div', vacationsList, null, _id, ['container']);
          createElement('h2', divContainer, name);
          createElement('h3', divContainer, date);
          createElement('h3', divContainer, days);
          const changeBtn = createElement('button', divContainer, 'Change', null, ['change-btn']);
          const doneBtn = createElement('button', divContainer, 'Done', null, ['done-btn']);

          changeBtn.addEventListener('click', loadVacationForEdit);
          doneBtn.addEventListener('click', deleteVacation);

          vacationsDB[_id] = {
            name: name,
            days: days,
            date: date,
          };
        }
      })
  }

  function addNewVacation(e) {
    if (e) {
      e.preventDefault();
    }

    const [name, days, date] = Object.values(inputDOMSelectors);
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        days: days.value,
        date: date.value,
      })
    }

    fetch(BASE_URL, httpHeaders)
      .then(() => {
        loadAllVacations();
        clearAllInputs();
      })
  }

  function loadVacationForEdit(e) {
    const vacId = e.currentTarget.parentNode.id;
    vacIdToEdit = vacId;

    e.currentTarget.parentNode.remove();
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = vacationsDB[vacId][key];
    }

    addVacationBtn.disabled = true;
    editVacationBtn.disabled = false;
  }

  function editVacation(e) {
    if (e) {
      e.preventDefault();
    }

    const [name, days, date] = Object.values(inputDOMSelectors);
    const httpHeaders = {
      method: 'PUT',
      body: JSON.stringify({
        name: name.value,
        days: days.value,
        date: date.value,
        _id: vacIdToEdit,
      })
    };

    fetch(BASE_URL + vacIdToEdit, httpHeaders)
      .then(() => {
        loadAllVacations();
        clearAllInputs();
        addVacationBtn.disabled = false;
        editVacationBtn.disabled = true;
      })
  }

  function deleteVacation(e) {
    const vacId = e.currentTarget.parentNode.id;
    const httpHeaders = {
      method: 'DELETE',
    }

    fetch(BASE_URL + vacId, httpHeaders)
      .then(() => {
        loadAllVacations();
        delete vacationsDB[vacId];
      })
  }

  function clearAllInputs() {
    Object.values(inputDOMSelectors)
      .forEach(input => input.value = '');
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

solve();