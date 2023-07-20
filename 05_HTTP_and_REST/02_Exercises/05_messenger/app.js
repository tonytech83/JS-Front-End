function attachEvents() {
	const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
	const messagesArea = document.getElementById('messages')
	const refreshBtn = document.getElementById('refresh');
	const submitBtn = document.getElementById('submit');
	const authorInput = document.querySelector('input[name="author"]');
	const contentInput = document.querySelector('input[name="content"]');

	refreshBtn.addEventListener('click', loadAllMessagesHandler);
	submitBtn.addEventListener('click', () => {
		const author = authorInput.value;
		const content = contentInput.value;
		const httpHeaders = {
			method: 'POST',
			body: JSON.stringify({ author, content })
		}

		fetch(BASE_URL, httpHeaders)
			.then((res) => res.json())
			.then(() => {
				messagesArea.textContent = '';
				loadAllMessagesHandler();
				authorInput.value = '';
				contentInput.value = '';
			})
			.catch((err) => console.log(err));
	})

	async function loadAllMessagesHandler() {
		messagesArea.textContent = '';
		const messagesRes = await fetch(BASE_URL);
		const messages = await messagesRes.json();

		let messagesArray = [];

		for (const { author, content } of Object.values(messages)) {
			messagesArray.push(`${author}: ${content}`)
		}

		messagesArea.innerHTML = messagesArray.join('\n')
	}
}

attachEvents();