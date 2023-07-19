function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
  const phonebook = document.getElementById('phonebook');
  const personInput = document.getElementById('person');
  const phoneInput = document.getElementById('phone');
  const btnLoad = document.getElementById('btnLoad');
  const btnCreate = document.getElementById('btnCreate');

  btnLoad.addEventListener('click', loadRecords);
  btnCreate.addEventListener('click', createRecord);

  async function loadRecords() {
    try {
      const phoneBookRes = await fetch(BASE_URL);
      let phoneBookData = await phoneBookRes.json();
      phoneBookData = Object.values(phoneBookData);

      phonebook.innerHTML = '';

      for (const { person, phone, _id } of phoneBookData) {
        const li = document.createElement('li');
        const btnDelete = document.createElement('button');

        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', deleteRecord);
        btnDelete.id = _id;
        li.textContent = `${person}: ${phone}`;
        li.appendChild(btnDelete);
        phonebook.appendChild(li);
      }
    } catch (error) {
      console.log(error);
    }

  }

  function deleteRecord(event) {
    const recordId = event.currentTarget.id
    const httpHeaders = {
      method: 'DELETE',
    }

    fetch(BASE_URL + `/${recordId}`, httpHeaders)
      .then((res) => res.json())
      .then(loadRecords)
      .catch(err => {
        console.log(err)
      })
  }

  function createRecord() {
    const person = personInput.value;
    const phone = phoneInput.value;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ person, phone })
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadRecords();
        personInput.value = '';
        phoneInput.value = '';
      })
      .catch(error => console.log(error))
  }
}

attachEvents();