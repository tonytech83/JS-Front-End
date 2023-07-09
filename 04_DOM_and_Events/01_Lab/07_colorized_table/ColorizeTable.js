function colorize() {
  const evenTrs = Array.from(document.querySelectorAll('tr:nth-child(even)'));

  evenTrs
    .map((tr) => tr.style.background = 'teal')
}
