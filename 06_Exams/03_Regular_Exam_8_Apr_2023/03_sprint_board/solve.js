// window.addEventListener('load', attachEvents);

function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

  const inputDOMSelectors = {
    title: document.getElementById('title'),
    description: document.getElementById('description'),
  };

  const otherDOMSelectors = {
    loadBoardBtn: document.getElementById('load-board-btn'),
    createTaskBtn: document.getElementById('create-task-btn'),
    todoTaskList: document.querySelector('#todo-section > ul'),
    inProgressTaskList: document.querySelector('#in-progress-section > ul'),
    codeReviewTaskList: document.querySelector('#code-review-section > ul'),
    doneTaskList: document.querySelector('#done-section > ul'),
  };

  const statusToListMap = {
    'ToDo': document.querySelector('#todo-section > ul'),
    'In Progress': document.querySelector('#in-progress-section > ul'),
    'Code Review': document.querySelector('#code-review-section > ul'),
    'Done': document.querySelector('#done-section > ul'),
  }

  const statusToButtonMap = {
    'ToDo': 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
    'Done': 'Close',
  }

  const statusToNewStatus = {
    'ToDo': 'In Progress',
    'In Progress': 'Code Review',
    'Code Review': 'Done',
  }

  const tasks = {};

  otherDOMSelectors.loadBoardBtn.addEventListener('click', loadTasks);
  otherDOMSelectors.createTaskBtn.addEventListener('click', createTask);

  function loadTasks(e) {
    if (e) {
      e.preventDefault();
    }
    //clear columns
    otherDOMSelectors.todoTaskList.innerHTML = '';
    otherDOMSelectors.inProgressTaskList.innerHTML = '';
    otherDOMSelectors.codeReviewTaskList.innerHTML = '';
    otherDOMSelectors.doneTaskList.innerHTML = '';

    // fetch data from server
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(data => {
        // load data to local database
        for (const { title, description, status, _id } of Object.values(data)) {
          tasks[_id] = { title, description, status }
        }
        // visualize data on webpage
        for (const id in tasks) {
          const { title, description, status } = tasks[id];
          const li = createElement('li', statusToListMap[status], null, id, ['task']);
          createElement('h3', li, title)
          createElement('p', li, description)
          const moveBtn = createElement('button', li, statusToButtonMap[status]);
          moveBtn.addEventListener('click', moveTask)
        }
      });
  }

  function createTask() {
    const { title, description } = inputDOMSelectors;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title: title.value, description: description.value, status: 'ToDo' }),
    };

    fetch(BASE_URL, httpHeaders)
      .then(() => {
        loadTasks();
        inputDOMSelectors.title.value = '';
        inputDOMSelectors.description.value = '';
      })
  }

  function moveTask(e) {
    const taskId = e.currentTarget.parentNode.id;

    if (e.currentTarget.textContent === 'Close') {
      e.currentTarget.parentNode.remove();
      // delete tasks[taskId];
      httpHeaders = {
        method: 'DELETE',
      };

      fetch(BASE_URL + taskId, httpHeaders)
        .then(() => {
          loadTasks();
        })
    } else {
      const { title, description, status } = tasks[taskId];
      const httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({
          title: title,
          description: description,
          status: statusToNewStatus[status],
        })
      }

      fetch(BASE_URL + taskId, httpHeaders)
        .then(() => {
          loadTasks();
        })
    }

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

attachEvents();