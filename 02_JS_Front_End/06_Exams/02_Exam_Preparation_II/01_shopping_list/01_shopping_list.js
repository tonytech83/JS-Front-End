function shoppingList(data) {
  const groceries = data.slice(0, 1)[0].split('!');
  const commands = data.slice(1, data.length);

  for (const commandData of commands) {
    const [command, item, newItem] = commandData.split(' ');
    if (command === 'Urgent' && !groceries.includes(item)) {
      groceries.unshift(item);
    } else if (command === 'Unnecessary' && groceries.includes(item)) {
      const idx = groceries.indexOf(item);
      groceries.splice(idx, 1);
    } else if (command === 'Correct' && groceries.includes(item)) {
      const idx = groceries.indexOf(item);
      groceries.splice(idx, 1, newItem);
    } else if (command === 'Rearrange' && groceries.includes(item)) {
      const idx = groceries.indexOf(item);
      let itemToRearrange = groceries.splice(idx, 1)[0];
      groceries.push(itemToRearrange)
    }
  }

  console.log(groceries.join(', '))
}


shoppingList(
  [
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
  ]
)

shoppingList(
  [
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
  ]
)

