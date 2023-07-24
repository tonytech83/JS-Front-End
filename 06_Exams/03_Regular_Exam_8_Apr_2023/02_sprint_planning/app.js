window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    title: document.querySelector('#title'),
    description: document.querySelector('#description'),
    label: document.querySelector('#label'),
    points: document.querySelector('#points'),
    assignee: document.querySelector('#assignee'),
  };

  const otherDOMSelectors = {
    createTaskBtn: document.querySelector('#create-task-btn'),
    deleteTaskBtn: document.querySelector('#delete-task-btn'),
    tasksSection: document.querySelector('#tasks-section'),
    createTaskForm: document.querySelector('#create-task-form'),
    totalSprintPoints: document.querySelector('#total-sprint-points'),
  };

  const labelToClassMap = {
    'Feature': 'feature',
    'Low Priority Bug': 'low-priority',
    'High Priority Bug': 'high-priority',
  };

  const labelToIconMap = {
    'Feature': '&#8865;',
    'Low Priority Bug': '&#9737;',
    'High Priority Bug': '&#9888;',
  };

  const tasks = {};
  let taskNumber = 1;

  otherDOMSelectors.createTaskBtn.addEventListener('click', createTaskHandler);
  otherDOMSelectors.deleteTaskBtn.addEventListener('click', deleteTaskHandler);

  function createTaskHandler() {
    // Check all the input elements has a value different by empty string
    const hasInvalidInputValue = Object.values(inputDOMSelectors)
      .some((input) => input.value === '');
    if (hasInvalidInputValue) {
      return;
    }

    const taskId = `task-${taskNumber}`
    const [title, description, label, points, assignee] = Object.values(inputDOMSelectors);

    // DOM manipulation
    const article = createElement('article', null, otherDOMSelectors.tasksSection, taskId, ['task-card']);
    createElement('div', `${label.value} ${labelToIconMap[label.value]}`, article, null, ['task-card-label', labelToClassMap[label.value]], null, true);
    createElement('h3', title.value, article, null, ['task-card-title']);
    createElement('p', description.value, article, null, ['task-card-description']);
    createElement('div', `Estimated at ${points.value} pts`, article, ['task-card-points']);
    createElement('div', `Assigned to: ${assignee.value}`, article, null, ['task-card-assignee']);
    const actionsDiv = createElement('div', null, article, null, ['task-card-actions']);
    const deleteBtn = createElement('button', 'Delete', actionsDiv);
    deleteBtn.addEventListener('click', loadDeleteForm)

    tasks[taskId] = {
      title: title.value,
      description: description.value,
      label: label.value,
      points: points.value,
      assignee: assignee.value,
    }

    updatePoints();
    otherDOMSelectors.createTaskForm.reset();
    taskNumber++;
  }

  function loadDeleteForm(e) {
    const taskId = e.target.parentNode.parentNode.getAttribute('id');
    document.getElementById('task-id').value = taskId;
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = tasks[taskId][key];
    }
    disableAllInputs();
    otherDOMSelectors.deleteTaskBtn.disabled = false;
    otherDOMSelectors.createTaskBtn.disabled = true;
  }

  function deleteTaskHandler() {
    const taskId = document.getElementById('task-id').value;
    const taskToRemove = document.getElementById(taskId);
    taskToRemove.remove();
    delete tasks[taskId];
    otherDOMSelectors.createTaskForm.reset();
    enableAllInputs();
    otherDOMSelectors.createTaskBtn.disabled = false;
    otherDOMSelectors.deleteTaskBtn.disabled = true;
    updatePoints();
  }

  function updatePoints() {
    const totalPoints = Object.values(tasks).map((t) => Number(t.points)).reduce((a, b) => a + b, 0);
    otherDOMSelectors.totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
  }

  function disableAllInputs() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].disabled = true;
    }
  }

  function enableAllInputs() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].disabled = false;
    }
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

