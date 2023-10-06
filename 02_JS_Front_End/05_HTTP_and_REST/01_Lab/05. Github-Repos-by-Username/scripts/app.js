function loadRepos() {
	const BASE_URL = 'https://api.github.com/users';
	const resultContainer = document.getElementById('res');
	const usernameInput = document.getElementById('username').value;
	const allRepos = document.getElementById('repos');

	while (allRepos.firstChild) {
		allRepos.removeChild(allRepos.firstChild);
	}

	fetch(BASE_URL + `/${usernameInput}/repos`, { method: 'GET' })
		.then((res) => res.json())
		.then((data) => {

			for (const repo of data) {
				let newLiTag = document.createElement('li')
				let newAnchorTag = document.createElement('a')

				newAnchorTag.href = repo.html_url
				newAnchorTag.textContent = repo.full_name

				newLiTag.appendChild(newAnchorTag)
				allRepos.appendChild(newLiTag)
			}

		})
		.catch(err => {

			let li = document.createElement('li');
			let anchor = document.createElement('a');

			anchor.textContent = err
			li.appendChild(anchor)
			allRepos.appendChild(li)
		})

}
