function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
  const titleInput = document.querySelector("#title");
  const addButton = document.querySelector("#add-button");
  const loadButton = document.getElementById('load-button');
  const todoList = document.querySelector("#todo-list");

  loadButton.addEventListener("click", loadAllTasks);
  addButton.addEventListener("click", addTask);

  function loadAllTasks(e) {
    // e?.preventDefault();
    if (e) {
      e.preventDefault();
    }

    todoList.innerHTML = '';

    fetch(BASE_URL)
      .then(res => res.json())
      .then(tasksRes => {
        const tasks = Object.values(tasksRes);

        for (const { name, _id } of tasks) {
          const li = createElement('li', null, todoList, _id)
          createElement('span', name, li);
          const removeBtn = createElement('button', 'Remove', li);
          const editBtn = createElement('button', 'Edit', li);

          removeBtn.addEventListener("click", removeTask);
          editBtn.addEventListener("click", editTask);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  function editTask() {
    const parentLi = this.parentElement;
    const [note, remove, edit] = Array.from(parentLi.children)
    const newInput = note.textContent;
    const removeBtn = remove

    note.remove();
    remove.remove();
    edit.remove();

    createElement('input', newInput, parentLi)
    parentLi.appendChild(removeBtn);
    const submitBtn = createElement('button', 'Submit', parentLi);
    submitBtn.addEventListener('click', submitTask)
  }

  function submitTask() {
    const liParent = this.parentNode;
    const id = liParent.id;
    const [input] = Array.from(liParent.children);

    httpHandlers = {
      method: 'PATCH',
      body: JSON.stringify({ name: input.value })
    }

    fetch(BASE_URL + id, httpHandlers)
      .then(() => loadAllTasks())
      .catch((err) => console.log(err))
  }

  function removeTask() {
    const id = this.parentElement.id;
    const httpHandlers = {
      method: 'DELETE'
    }

    fetch(BASE_URL + id, httpHandlers)
      .then(() => {
        loadAllTasks();
      })
  }

  function addTask(e) {
    e?.preventDefault();

    const name = titleInput.value;
    const httpHandler = {
      method: 'POST',
      body: JSON.stringify({ name })
    }

    fetch(BASE_URL, httpHandler)
      .then(() => {
        loadAllTasks();
        titleInput.value = '';
      })
      .catch((err) => console.log(err))
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

attachEvents();
