window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    genre: document.querySelector('#genre'),
    songName: document.querySelector('#name'),
    author: document.querySelector('#author'),
    date: document.querySelector('#date'),
  };

  const otherDOMSelector = {
    addBtn: document.querySelector('#add-btn'),
    allHitsContainer: document.getElementsByClassName('all-hits-container')[0],
    savedContainer: document.getElementsByClassName('saved-container')[0],
    totalLikes: document.querySelector('#total-likes'),
  }

  let likes = 0;

  otherDOMSelector.addBtn.addEventListener('click', addSong);

  function addSong(e) {
    if (e) {
      e.preventDefault();
    }

    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');

    if (!allInputsHasValue) {
      return;
    }

    // Check if date is valid
    const template = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;

    if (!template.test(inputDOMSelectors.date.value)) {
      return;
    }



    const [genre, songName, author, date] = Object.values(inputDOMSelectors);
    const hitsInfoDiv = createElement('div', null, otherDOMSelector.allHitsContainer, null, ['hits-info']);
    createElement('img', null, hitsInfoDiv, null, null, { src: './static/img/img.png' });
    createElement('h2', `Genre: ${genre.value}`, hitsInfoDiv);
    createElement('h2', `Name: ${songName.value}`, hitsInfoDiv);
    createElement('h2', `Author: ${author.value}`, hitsInfoDiv);
    createElement('h3', `Date: ${date.value}`, hitsInfoDiv);
    const saveBtn = createElement('button', 'Save song', hitsInfoDiv, null, ['save-btn']);
    const likeBtn = createElement('button', 'Like song', hitsInfoDiv, null, ['like-btn']);
    const deleteBtn = createElement('button', 'Delete', hitsInfoDiv, null, ['delete-btn']);

    likeBtn.addEventListener('click', likeSongHandler);
    saveBtn.addEventListener('click', saveSongHandler);
    deleteBtn.addEventListener('click', deleteSongHandler);

    clearAllInputs();
  }

  function likeSongHandler() {
    this.disabled = true;
    likes++;
    otherDOMSelector.totalLikes.children[0].children[0].textContent = `Total Likes: ${likes}`
  }

  function saveSongHandler() {
    // Read the state of the song form DOM and move to saved songs
    const [img, genre, songName, author, date, _saveBtn, _likeBtn, deleteBtn] = Array.from(this.parentElement.children);

    // DOM manipulation
    const hitsInfoDiv = createElement('div', null, otherDOMSelector.savedContainer, null, ['hits-info']);
    hitsInfoDiv.appendChild(img);
    hitsInfoDiv.appendChild(genre);
    hitsInfoDiv.appendChild(songName);
    hitsInfoDiv.appendChild(author);
    hitsInfoDiv.appendChild(date);
    hitsInfoDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteSongHandler);

    // Remove song from "Collection of songs"
    this.parentElement.remove();

  }

  function deleteSongHandler() {
    this.parentElement.remove();
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