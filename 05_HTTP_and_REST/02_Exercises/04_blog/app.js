function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/blog/';
  const btnLoadPosts = document.getElementById('btnLoadPosts');
  const postsContainer = document.getElementById('posts');
  const btnViewPost = document.getElementById('btnViewPost');
  const postTitle = document.getElementById('post-title');
  const postBody = document.getElementById('post-body');
  const postComments = document.getElementById('post-comments');
  let postToComment = {};

  btnLoadPosts.addEventListener('click', loadPostsHandler);
  btnViewPost.addEventListener('click', loadPostCommentsHandler);

  function loadPostsHandler() {
    postComments.innerHTML = '';
    postTitle.textContent = 'Post Details';
    postBody.textContent = '';

    fetch(BASE_URL + 'posts')
      .then(res => res.json())
      .then(posts => {
        for (const post in posts) {
          const { body, id, title } = posts[post];
          newOption = createElement('option', title, postsContainer, '', '', { value: id });
          postToComment[id] = body;
        }
      })
  }

  function loadPostCommentsHandler() {
    const optionId = postsContainer.value;
    console.log(postToComment)
    postBody.textContent = postToComment[optionId]
    postTitle.textContent = postsContainer.options[postsContainer.selectedIndex].text; //.toUpperCase();
    postComments.innerHTML = '';

    fetch(BASE_URL + 'comments')
      .then(res => res.json())
      .then(comments => {
        for (const comment in comments) {
          const { id, postId, text } = comments[comment];
          if (optionId === postId) {
            createElement('li', text, postComments)

          }
        }
      })
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

attachEvents();