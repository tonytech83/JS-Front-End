async function loadCommits() {
  const BASE_URL = 'https://api.github.com/repos'
  const usernameInput = document.getElementById('username').value;
  const repoInput = document.getElementById('repo').value;
  const commits = document.getElementById('commits');

  try {
    const allCommitsRes = await fetch(BASE_URL + `/${usernameInput}/${repoInput}/commits`);
    const data = await allCommitsRes.json();
    data
        .forEach(({ commit }) => {
          let newLi = document.createElement('li');
          newLi.textContent = `${commit.author.name}: ${commit.message}`;
          commits.appendChild(newLi);
        })
  } catch (err) {
    let errLi = document.createElement('li');
    errLi.textContent = err.message;
    commits.appendChild(errLi)
  }
}