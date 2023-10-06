function addItem() {
    const ulItem = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newListItem = document.createElement('li');
    const newAnchor = document.createElement('a')

    newListItem.textContent = input.value;
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href', '#');
    newAnchor.addEventListener('click', deleteHandler);
    newListItem.appendChild(newAnchor)
    ulItem.appendChild(newListItem);
    input.value = '';

    function deleteHandler(e) {
        e.currentTarget.parentNode.remove()
    }
}