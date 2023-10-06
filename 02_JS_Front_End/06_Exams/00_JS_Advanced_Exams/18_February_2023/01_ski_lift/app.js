window.addEventListener('load', solve);

function solve() {
  const ticketState = {
    firstName: null,
    lastName: null,
    peopleCount: null,
    fromDate: null,
    daysCount: null,
  }

  const inputDOMSelectors = {
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    peopleCount: document.querySelector('#people-count'),
    fromDate: document.querySelector('#from-date'),
    daysCount: document.querySelector('#days-count'),
  };

  otherDOMSelectors = {
    nextBtn: document.querySelector('#next-btn'),
    ticketInfoList: document.querySelector('.ticket-info-list'),
    confirmTicket: document.querySelector('.confirm-ticket'),
    form: document.getElementsByTagName('form')[0],
    mainDiv: document.querySelector('#main'),
    bodyContainer: document.querySelector('#body'),
  };

  otherDOMSelectors.nextBtn.addEventListener('click', nextBtnClickHandler);

  function nextBtnClickHandler(e) {
    if (e) {
      e.preventDefault();
    }

    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '')

    if (!allInputsHasValue) {
      return;
    }

    const { firstName, lastName, peopleCount, fromDate, daysCount } = inputDOMSelectors
    const li = createElement('li', null, otherDOMSelectors.ticketInfoList, null, ['ticket']);
    const article = createElement('article', null, li);
    createElement('h3', `Name: ${firstName.value} ${lastName.value}`, article);
    createElement('p', `From date: ${fromDate.value}`, article);
    createElement('p', `For ${daysCount.value} days`, article);
    createElement('p', `For ${peopleCount.value} people`, article);
    const editBtn = createElement('button', 'Edit', li, null, ['edit-btn']);
    const continueBtn = createElement('button', 'Continue', li, null, ['continue-btn']);

    editBtn.addEventListener('click', editBtnClickHandler);
    continueBtn.addEventListener('click', continueBtnClickHandler);

    // store ticket info in ticketState object
    for (const key in inputDOMSelectors) {
      ticketState[key] = inputDOMSelectors[key].value;
    }

    otherDOMSelectors.form.reset();
    otherDOMSelectors.nextBtn.disabled = true;
  }

  function editBtnClickHandler() {
    otherDOMSelectors.nextBtn.disabled = false;
    this.parentNode.remove();

    //load stored ticket info in input form
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = ticketState[key];
    }
  }

  function continueBtnClickHandler() {
    this.parentNode.remove();

    const { firstName, lastName, peopleCount, fromDate, daysCount } = ticketState;
    const li = createElement('li', null, otherDOMSelectors.confirmTicket, null, ['ticket-content']);
    const article = createElement('article', null, li);
    createElement('h3', `Name: ${firstName} ${lastName}`, article);
    createElement('p', `From date: ${fromDate}`, article);
    createElement('p', `For ${daysCount} days`, article);
    createElement('p', `For ${peopleCount} people`, article);
    const confirmBtn = createElement('button', 'Confirm', li, null, ['confirm-btn']);
    const cancelBtn = createElement('button', 'Cancel', li, null, ['cancel-btn'])

    cancelBtn.addEventListener('click', cancelBtnClickHandler);
    confirmBtn.addEventListener('click', confirmBtnClickHandler);
  }

  function cancelBtnClickHandler() {
    otherDOMSelectors.nextBtn.disabled = false;
    this.parentNode.remove();
  }

  function confirmBtnClickHandler() {
    otherDOMSelectors.mainDiv.remove();
    createElement('h1', 'Thank you, have a nice day!', otherDOMSelectors.bodyContainer, 'thank-you')
    const backBtn = createElement('button', 'Back', otherDOMSelectors.bodyContainer, 'back-btn')
    backBtn.addEventListener('click', (e) => {
      // reload page
      window.location.reload();
    })
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

