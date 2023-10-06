function search() {
  const towns = Array.from(document.getElementById('towns').children);
  const input = document.getElementById('searchText').value;
  const result = document.getElementById('result');
  let matchedTowns = [];
  let matchesFound = 0;

  towns
    .forEach(town => {
      town.removeAttribute('style');
      if (town.textContent.includes(input)) {
        matchedTowns.push(town);
        matchesFound++;
      }
    })

  matchedTowns
    .map(town => {
      town.setAttribute('style', 'font-weight:bold; text-decoration:underline');
    })

  result.textContent = `${matchesFound} matches found`;

}
