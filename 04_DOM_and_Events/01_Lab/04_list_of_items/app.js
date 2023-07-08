function addItem() {
    const ulItem = document.getElementById('items');
    const input = document.getElementById('newItemText');

    const newListItem = document.createElement('li');
    newListItem.textContent = input.value;
    ulItem.appendChild(newListItem);
    input.value = '';
}