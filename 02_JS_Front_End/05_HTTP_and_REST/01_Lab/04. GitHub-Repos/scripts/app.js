function loadRepos() {
  const BASE_URL = 'https://api.github.com/users/testnakov/repos';
  const resultContainer = document.getElementById('res');

  fetch(BASE_URL, { method: 'GET' })
    .then(response => response.text())
    .then((data) => {
      resultContainer.textContent = data;
    })
    .catch((err) => {
      console.error(err);
    })
}