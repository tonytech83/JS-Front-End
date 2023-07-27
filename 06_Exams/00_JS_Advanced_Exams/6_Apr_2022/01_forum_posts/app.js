window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    postTitle: document.getElementById('post-title'),
    postCategory: document.getElementById('post-category'),
    postContent: document.getElementById('post-content'),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById('publish-btn'),
    reviewList: document.getElementById('review-list'),
    form: document.getElementsByTagName('form')[0],
    publishedList: document.getElementById('published-list'),
    clearBtn: document.getElementById('clear-btn'),
  };

  let postsDB = {};
  let postId = 1;

  otherDOMSelectors.publishBtn.addEventListener("click", publishPost);
  otherDOMSelectors.clearBtn.addEventListener('click', clearPosts)

  function publishPost() {
    // Check all the input elements has a value different by empty string
    const allInputsHasValue = Object.values(inputDOMSelectors)
      .every(input => input.value !== '');
    if (!allInputsHasValue) {
      return;
    }

    const [postTitle, postCategory, postContent] = Object.values(inputDOMSelectors);
    //type, parentNode, content, id, classes, attributes, useInnerHtml
    const li = createElement('li', otherDOMSelectors.reviewList, null, postId, ['rpost']);
    const article = createElement('article', li);
    createElement('h4', article, postTitle.value);
    createElement('p', article, `Category: ${postCategory.value}`);
    createElement('p', article, `Content: ${postContent.value}`);
    const editBtn = createElement('button', li, 'Edit', null, ['action-btn', 'edit']);
    const approveBtn = createElement('button', li, 'Approve', null, ['action-btn', 'approve']);

    editBtn.addEventListener('click', editPost);
    approveBtn.addEventListener('click', approvePost);

    postsDB[postId] = {
      postTitle: postTitle.value,
      postCategory: postCategory.value,
      postContent: postContent.value,
    }

    postId++;
    otherDOMSelectors.form.reset();
  }

  function editPost(e) {
    const postId = e.currentTarget.parentNode.id;
    const {postTitle, postCategory, postContent} = postsDB[postId];
  
    inputDOMSelectors.postTitle.value = postTitle;
    inputDOMSelectors.postCategory.value = postCategory;
    inputDOMSelectors.postContent.value = postContent;

    e.currentTarget.parentNode.remove();
  }

  function approvePost(e) {
    const article = e.currentTarget.parentNode.getElementsByTagName('article')[0];
    const li = createElement('li', otherDOMSelectors.publishedList, null, null, ['rpost']);
    li.appendChild(article);
    e.currentTarget.parentNode.remove();
  }

  function clearPosts() {
    otherDOMSelectors.publishedList.innerHTML = '';
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
