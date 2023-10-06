function addItem() {
    const newItemInput = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const select = document.getElementById('menu')

    if (newItemValue.value.length > 0 && newItemValue.value.length > 0) {
        // create new option element
        let option = document.createElement('option');

        // set text and value to the new option element 
        option.text = newItemInput.value;
        option.value = newItemValue.value;

        // append option element to select tag
        select.appendChild(option);

        // clear both input fields
        newItemInput.value = '';
        newItemValue.value = '';
    }

}