function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books'
  const btnLoadBooks = document.getElementById('loadBooks');
  const formContainer = document.getElementById('form');
  const bookTitleInput = formContainer.querySelector('input[name="title"]');
  const bookAuthorInput = formContainer.querySelector('input[name="author"]');
  const btnSubmit = formContainer.getElementsByTagName('button')[0];
  const tbody = document.getElementsByTagName('tbody')[0];
  const formTitle = formContainer.getElementsByTagName('h3')[0];

  btnLoadBooks.addEventListener('click', loadBooksHandler);
  btnSubmit.addEventListener('click', createBookHandler);

  async function loadBooksHandler() {
    // clear previous records in tbody
    tbody.innerHTML = '';

    try {
      const bookLibraryRes = await fetch(BASE_URL)
      let bookLibraryData = await bookLibraryRes.json();

      for (const bookId in bookLibraryData) {
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdAuthor = document.createElement('td');
        const tdAction = document.createElement('td');
        const btnEdit = document.createElement('button');
        const btnDelete = document.createElement('button');

        tdAuthor.textContent = bookLibraryData[bookId].author;
        tdTitle.textContent = bookLibraryData[bookId].title;
        btnEdit.textContent = 'Edit';
        btnEdit.addEventListener('click', editBookHandler);
        btnEdit.id = bookId;
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', deleteBookHandler);

        // DOM manipulations
        tdAction.append(btnEdit, btnDelete);
        tr.append(tdTitle, tdAuthor, tdAction);
        tbody.appendChild(tr);
      }
    } catch (e) {
      console.log(e)
    }

  }

  async function createBookHandler() {
    if (bookTitleInput.value != "" && bookAuthorInput.value != "") {
      const title = bookTitleInput.value;
      const author = bookAuthorInput.value;
      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ author, title })
      };
      try {
        await fetch(BASE_URL, httpHeaders)
        loadBooksHandler();
        bookTitleInput.value = "";
        bookAuthorInput.value = "";
      } catch {
        console.error(err)
      }

    }
  }

  function editBookHandler(e) {
    const recordId = e.currentTarget.id
    const [bookTitle, bookAuthor, _] = e.currentTarget.parentElement.parentElement.children;

    // DOM manipulations
    formTitle.textContent = 'Edit FORM';
    btnSubmit.textContent = 'Save';
    bookTitleInput.value = bookTitle.textContent;
    bookAuthorInput.value = bookAuthor.textContent;
    btnSubmit.removeEventListener('click', createBookHandler);
    btnSubmit.addEventListener('click', () => saveNewBookHandler(recordId));
  }

  function saveNewBookHandler(recordId) {
    if (bookTitleInput.value.trim() !== "" && bookAuthorInput.value.trim() !== "") {
      const title = bookTitleInput.value;
      const author = bookAuthorInput.value;
      const httpHeaders = {
        method: 'PUT',
        body: JSON.stringify({ author, title })
      }

      fetch(BASE_URL + `/${recordId}`, httpHeaders)
        .then(() => {
          btnSubmit.removeEventListener('click', saveNewBookHandler);
          btnSubmit.addEventListener('click', createBookHandler);
          loadBooksHandler();
          formTitle.textContent = 'FORM';
          btnSubmit.textContent = 'Submit';
          bookTitleInput.value = "";
          bookAuthorInput.value = "";
        })
        .catch(err => console.log(err));
    }
  }

  function deleteBookHandler(e) {
    const recordId = e.currentTarget.parentElement.children[0].id
    const httpHeaders = {
      method: 'DELETE',
    }

    fetch(BASE_URL + `/${recordId}`, httpHeaders)
      .then(() => { loadBooksHandler() })
  }

}

attachEvents();