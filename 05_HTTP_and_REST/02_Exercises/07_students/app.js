function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const tbody = document.getElementsByTagName('tbody')[0];
  const submitBtn = document.getElementById('submit');
  const firstNameInput = document.querySelector('input[name="firstName"]');
  const lastNameInput = document.querySelector('input[name="lastName"]');
  const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
  const gradeInput = document.querySelector('input[name="grade"]');

  submitBtn.addEventListener('click', createStudentHandler)

  function loadAllStudents() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(students => {
        for (const { facultyNumber, firstName, grade, lastName, _id } of Object.values(students)) {
          const newRow = createElement('tr', '', tbody);
          createElement('td', firstName, newRow);
          createElement('td', lastName, newRow);
          createElement('td', facultyNumber, newRow);
          createElement('td', grade, newRow);
        }
      })
      .catch(err => console.log(err));
  }

  function createStudentHandler() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumberInput.value;
    const grade = gradeInput.value;
    httpHandler = {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }

    if (firstName != '' && lastName != '' && facultyNumber != '' && grade != '') {
      fetch(BASE_URL, httpHandler)
        .then(() => {
          tbody.innerHTML = '';
          loadAllStudents();
          firstNameInput.value = '';
          lastNameInput.value = '';
          facultyNumberInput.value = '';
          gradeInput.value = '';
        })
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

  loadAllStudents();

}

attachEvents();