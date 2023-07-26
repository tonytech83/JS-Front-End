window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    dateIn: document.getElementById('date-in'),
    dateOut: document.getElementById('date-out'),
    peopleCount: document.getElementById('people-count'),
  };

  otherDOMSelectors = {
    nextBtn: document.getElementById('next-btn'),
    infoList: document.querySelector('#info-reservations > div > div > ul'),
    confirmList: document.querySelector('.confirm-list'),
    form: document.getElementsByTagName('form')[0],
    verification: document.getElementById('verification'),
  }

  let reservation = {
    firstName: null,
    lastName: null,
    dateIn: null,
    dateOut: null,
    peopleCount: null,
  };

  otherDOMSelectors.nextBtn.addEventListener('click', addReservation);

  function addReservation(e) {
    if (e) {
      e.preventDefault();
    }

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    if (new Date(inputDOMSelectors.dateIn.value) >= new Date(inputDOMSelectors.dateOut.value)) {
      return;
    }

    const [firstName, lastName, dateIn, dateOut, peopleCount] = Object.values(inputDOMSelectors);
    const li = createElement('li', otherDOMSelectors.infoList, null, null, ['reservation-content']);
    const article = createElement('article', li);
    createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`);
    createElement('p', article, `From date: ${dateIn.value}`);
    createElement('p', article, `To date: ${dateOut.value}`);
    createElement('p', article, `For ${peopleCount.value} people`)
    const editBtn = createElement('button', li, 'Edit', null, ['edit-btn']);
    const continueBtn = createElement('button', li, 'Continue', null, ['continue-btn']);

    editBtn.addEventListener('click', editReservation);
    continueBtn.addEventListener('click', continueReservation);

    reservation = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateIn: dateIn.value,
      dateOut: dateOut.value,
      peopleCount: peopleCount.value,
    }

    otherDOMSelectors.nextBtn.disabled = true;
    otherDOMSelectors.form.reset();

  }

  function editReservation() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = reservation[key];
    }
    otherDOMSelectors.nextBtn.disabled = false;
    otherDOMSelectors.infoList.innerHTML = '';
  }

  function continueReservation(e) {
    const article = e.currentTarget.parentNode.getElementsByTagName('article')[0];
    const li = createElement('li', otherDOMSelectors.confirmList, null, null, ['reservation-content']);
    li.appendChild(article)
    const confirmBtn = createElement('button', li, 'Confirm', null, ['confirm-btn']);
    const cancelBtn = createElement('button', li, 'Cancel', null, ['cancel-btn']);

    confirmBtn.addEventListener('click', confirmReservation);
    cancelBtn.addEventListener('click', cancelReservation);

    otherDOMSelectors.infoList.innerHTML = '';
  }

  function confirmReservation() {
    otherDOMSelectors.confirmList.innerHTML = '';
    otherDOMSelectors.nextBtn.disabled = false;
    otherDOMSelectors.verification.classList.add('reservation-confirmed');
    otherDOMSelectors.verification.textContent = 'Confirmed.';
  }

  function cancelReservation() {
    otherDOMSelectors.confirmList.innerHTML = '';
    otherDOMSelectors.nextBtn.disabled = false;
    otherDOMSelectors.verification.classList.add('reservation-cancelled');
    otherDOMSelectors.verification.textContent = 'Cancelled.';
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





