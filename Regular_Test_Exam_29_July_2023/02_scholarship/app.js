window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    student: document.getElementById('student'),
    university: document.getElementById('university'),
    score: document.getElementById('score'),
  };

  const otherDOMSelectors = {
    nextBtn: document.getElementById('next-btn'),
    inputForm: document.querySelector('#newApply > form'),
    previewList: document.getElementById('preview-list'),
    candidatesList: document.getElementById('candidates-list'),
  };

  let studentToEdit = {
    student: null,
    university: null,
    score: null,
  }

  otherDOMSelectors.nextBtn.addEventListener('click', addToPreviewList);

  function addToPreviewList() {
    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [student, university, score] = Object.values(inputDOMSelectors);
    const liEl = createElement('li', otherDOMSelectors.previewList, null, null, ['application']);
    const articleEl = createElement('article', liEl);
    createElement('h4', articleEl, student.value);
    createElement('p', articleEl, `University: ${university.value}`);
    createElement('p', articleEl, `Score: ${score.value}`);
    const editBtn = createElement('button', liEl, 'edit', null, ['action-btn', 'edit']);
    const applyBtn = createElement('button', liEl, 'apply', null, ['action-btn', 'apply']);

    editBtn.addEventListener('click', editStudentInfo);
    applyBtn.addEventListener('click', applyStudent);

    studentToEdit = {
      student: student.value,
      university: university.value,
      score: score.value,
    }


    otherDOMSelectors.nextBtn.disabled = true;
    otherDOMSelectors.inputForm.reset();
  }

  function editStudentInfo() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = studentToEdit[key];
    }

    otherDOMSelectors.nextBtn.disabled = false;
    otherDOMSelectors.previewList.innerHTML = '';
  }

  function applyStudent(e) {
    otherDOMSelectors.previewList.innerHTML = '';
    const [student, university, score] =  Object.values(studentToEdit);
    const liEl = createElement('li', otherDOMSelectors.candidatesList, null, null, ['application']);
    const articleEl = createElement('article', liEl);
    createElement('h4', articleEl, student);
    createElement('p', articleEl, `University: ${university}`);
    createElement('p', articleEl, `Score: ${score}`);

    otherDOMSelectors.nextBtn.disabled = false;
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
