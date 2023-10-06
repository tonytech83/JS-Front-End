function solve() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

  const inputDOMSelectors = {
    courseName: document.getElementById('course-name'),
    courseType: document.getElementById('course-type'),
    description: document.getElementById('description'),
    teacherName: document.getElementById('teacher-name'),
  };

  const otherDOMSelectors = {
    addCourseBtn: document.getElementById('add-course'),
    editCourseBtn: document.getElementById('edit-course'),
    loadCoursesBtn: document.getElementById('load-course'),
    tasksContainer: document.getElementById('list'),
    form: document.getElementsByTagName('form')[0],
  };

  let coursesDB = {};
  let courseToEdit = null;

  otherDOMSelectors.loadCoursesBtn.addEventListener('click', loadAllCourses);
  otherDOMSelectors.addCourseBtn.addEventListener('click', addNewCourse);
  otherDOMSelectors.editCourseBtn.addEventListener('click', editCourse);

  function loadAllCourses() {

    otherDOMSelectors.tasksContainer.innerHTML = '';

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        for (const { title, type, description, teacher, _id } of Object.values(data)) {
          const container = createElement('div', otherDOMSelectors.tasksContainer, null, _id, ['container']);
          createElement('h2', container, title);
          createElement('h3', container, teacher);
          createElement('h3', container, type);
          createElement('h4', container, description);
          const editBtn = createElement('button', container, 'Edit Course', null, ['edit-btn']);
          const finishBtn = createElement('button', container, 'Finish Course', null, ['finish-btn']);

          editBtn.addEventListener('click', loadCourseForEdit);
          finishBtn.addEventListener('click', finishCourse);

          coursesDB[_id] = {
            courseName: title,
            courseType: type,
            description: description,
            teacherName: teacher,
          }
        }
      })

  }

  function addNewCourse(e) {
    if (e) {
      e.preventDefault();
    }

    const [title, type, description, teacher] = Object.values(inputDOMSelectors);
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({
        title: title.value,
        type: type.value,
        description: description.value,
        teacher: teacher.value,
      })
    }

    fetch(BASE_URL, httpHeaders)
      .then(() => {
        loadAllCourses();
      })

    otherDOMSelectors.form.reset();

  }

  function loadCourseForEdit(e) {
    const courseId = e.currentTarget.parentNode.id;
    e.currentTarget.parentNode.remove();
    courseToEdit = courseId;

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = coursesDB[courseId][key];
    }

    otherDOMSelectors.editCourseBtn.disabled = false;
    otherDOMSelectors.addCourseBtn.disabled = true;
  }

  function editCourse(e) {
    if (e) {
      e.preventDefault();
    }

    const [title, type, description, teacher] = Object.values(inputDOMSelectors);
    const httpHeaders = {
      method: 'PUT',
      body: JSON.stringify({
        title: title.value,
        type: type.value,
        description: description.value,
        teacher: teacher.value,
        _id: courseToEdit,
      })
    }

    fetch(BASE_URL + courseToEdit, httpHeaders)
      .then(() => {
        loadAllCourses();
      })

    otherDOMSelectors.editCourseBtn.disabled = true;
    otherDOMSelectors.addCourseBtn.disabled = false;
    otherDOMSelectors.form.reset();
  }

  function finishCourse(e) {
    const courseId = e.currentTarget.parentNode.id;
    delete coursesDB[courseId];
    const httpHeaders = {
      method: 'DELETE',
    }

    fetch(BASE_URL + courseId, httpHeaders)
      .then(() => {
        loadAllCourses();
      })
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

solve();