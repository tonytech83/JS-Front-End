function extract(content) {
  const text = document.getElementById(content).textContent;

  const pattern = /\((.*?)\)/g;
  let matches = text.match(pattern);

  return matches
    .map(match => match.slice(1, -1))
    .join('; ')

}