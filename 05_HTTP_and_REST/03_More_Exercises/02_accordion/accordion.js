function solution() {
  const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/';
  const mainContainer = document.getElementById('main');

  fetch(BASE_URL + 'list')
    .then(res => res.json())
    .then(articles => {
      for (const { _id, title } of articles) {
        const accordingDiv = createElement('div', '', mainContainer, '', ['accordion']);
        const headDiv = createElement('div', '', accordingDiv, '', ['head']);
        createElement('span', title, headDiv);
        const btn = createElement('button', 'More', headDiv, _id, ['button']);
        const extraDiv = createElement('div', '', accordingDiv, '', ['extra']);
        const contentPar = createElement('p', '', extraDiv);
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.id;

          if (e.currentTarget.textContent === 'Less') {
            const according = e.currentTarget.parentElement.parentElement;
            const extra = according.children[1];
            extra.style.display = 'none';
            contentPar.textContent = '';
          } else {
            extraDiv.style.display = 'block';
            fetch(BASE_URL + `details/${id}`)
              .then(res => res.json())
              .then(contentInfo => {
                const { _id, title, content } = contentInfo;
                contentPar.textContent = content;
              })
              .catch(err => console.log(err));
          }
          e.currentTarget.textContent = e.currentTarget.textContent === 'Less' ? 'More' : 'Less';
        })
      }
    })
    .catch(err => console.log(err));

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

    // if (content && type != 'input') {
    //   htmlElement.value = content;
    // }

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