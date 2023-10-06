function solve() {
  const inputDOMSelectors = {
    recipientName: document.getElementById('recipientName'),
    title: document.getElementById('title'),
    message: document.getElementById('message'),
  };

  const otherDOMSelectors = {
    addBtn: document.getElementById('add'),
    resetBtn: document.getElementById('reset'),
    inputForm: document.getElementsByTagName('form')[0],
    mailsList: document.querySelector('#list'),
    sentList: document.querySelector('div.sent-mails > ul'),
    deleteList: document.querySelector('div.trash > ul'),
  };

  let emailsDB = {};
  let emailId = 1;

  otherDOMSelectors.addBtn.addEventListener('click', addEmail);
  otherDOMSelectors.resetBtn.addEventListener('click', e => {
    e.preventDefault();
    clearAllInputs();
  });

  function addEmail(e) {
    e.preventDefault();

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [recipientName, title, message] = Object.values(inputDOMSelectors);
    const liElement = createElement('li', otherDOMSelectors.mailsList, null, emailId);
    createElement('h4', liElement, `Title: ${title.value}`);
    createElement('h4', liElement, `Recipient Name: ${recipientName.value}`);
    createElement('span', liElement, message.value);
    const divActions = createElement('div', liElement, null, null, ['list-action']);
    const sendBtn = createElement('button', divActions, 'Send', 'send', null, { 'type': 'submit' });
    const deleteBtn = createElement('button', divActions, 'Delete', 'delete', null, { 'type': 'submit' });

    sendBtn.addEventListener('click', sentEmail);
    deleteBtn.addEventListener('click', deleteEmail);

    emailsDB[emailId] = {
      recipientName: recipientName.value,
      title: title.value,
      message: message.value,
    }

    emailId++;
    clearAllInputs();
  }

  function sentEmail(e) {
    const emailId = e.currentTarget.parentNode.parentNode.id;
    e.currentTarget.parentNode.parentNode.remove();

    const [recipientName, title, _message] = Object.values(emailsDB[emailId]);
    const liElement = createElement('li', otherDOMSelectors.sentList, null, emailId);
    createElement('span', liElement, `To: ${recipientName}`);
    createElement('span', liElement, `Title: ${title}`);
    const divBtn = createElement('div', liElement, null, null, ['btn']);
    const deleteBtn = createElement('button', divBtn, 'Delete', null, ['delete'], { 'type': 'submit' });

    deleteBtn.addEventListener('click', deleteEmail);
  }

  function deleteEmail(e) {
    const emailId = e.currentTarget.parentNode.parentNode.id;
    e.currentTarget.parentNode.parentNode.remove();

    const [recipientName, title, _message] = Object.values(emailsDB[emailId]);
    const liElement = createElement('li', otherDOMSelectors.deleteList);
    createElement('span', liElement, `To: ${recipientName}`);
    createElement('span', liElement, `Title: ${title}`);

    delete emailsDB[emailId];
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
solve()