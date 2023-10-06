function lockedProfile() {
  BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';
  const mainContainer = document.getElementById('main');

  mainContainer.innerHTML = '';

  let idx = 1;

  fetch(BASE_URL)
    .then(res => res.json())
    .then(usersData => {
      for (const { age, email, username, _id } of Object.values(usersData)) {
        const profileDiv = createElement('div', '', mainContainer, _id, ['profile']);
        createElement('img', '', profileDiv, '', ['userIcon'], { src: './iconProfile2.png' });
        createElement('label', 'Lock', profileDiv);
        createElement('input', 'lock', profileDiv, '', '', { type: 'radio', name: `user${idx}Locked`, checked: true });
        createElement('label', 'Unlock', profileDiv);
        createElement('input', 'unlock', profileDiv, '', '', { type: 'radio', name: `user${idx}Locked` });
        createElement('br', '', profileDiv);
        createElement('hr', '', profileDiv);
        createElement('label', 'Username', profileDiv);
        createElement('input', username, profileDiv, '', '', { type: 'text', name: `user${idx}Username`, disabled: true, readOnly: true });
        const userHiddenInfo = createElement('div', '', profileDiv, _id,);
        userHiddenInfo.style.display = 'none';
        createElement('hr', '', userHiddenInfo);
        createElement('label', 'Email:', userHiddenInfo);
        createElement('input', email, userHiddenInfo, '', '', { type: 'email', name: `user${idx}Email`, disabled: true, readOnly: true });
        createElement('label', 'Age:', userHiddenInfo);
        createElement('input', age, userHiddenInfo, '', '', { type: 'email', name: `user${idx}Age`, disabled: true, readOnly: true });
        const showMoreBtn = createElement('button', 'Show more', profileDiv);
        showMoreBtn.addEventListener('click', showMoreHandler);
        idx++;
      }
    })

  function showMoreHandler(e) {
    const radioBtnLock = e.currentTarget.parentElement.children[2]

    if (!radioBtnLock.checked) {
      const userHiddenInfo = e.currentTarget.parentElement.children[9]
      userHiddenInfo.style.display = e.currentTarget.textContent === 'Show more' ? 'block' : "none";
      e.currentTarget.textContent = e.currentTarget.textContent === 'Show more' ? 'Hide it' : "Show more";


    }
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type)
    if (content && type != 'input') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    // ['list', 'item', ...]
    if (classes) {
      htmlElement.classList.add(...classes)
    }

    // { src: 'link to image', href: 'link to site', ... }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;

  }

}