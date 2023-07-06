function parseBooksInformation(data) {
  let bookShelves = {};
  let genreMapper = {};

  function addShelf(line) {
    let [id, genre] = line.split(' -> ');
    if (!bookShelves.hasOwnProperty(id)) {
      bookShelves[id] = {
        genre,
        bookInfo: []
      };
      genreMapper[genre] = id;
    }
  }

  function addBook(line) {
    let [bookTitle, bookInfo] = line.split(': ')
    let [bookAuthor, bookGenre] = bookInfo.split(', ')

    if (genreMapper.hasOwnProperty(bookGenre)) {
      let id = genreMapper[bookGenre]
      bookShelves[id].bookInfo.push([bookTitle, bookAuthor])
    }
  }

  function output() {
    Object.entries(bookShelves)
      .sort((a, b) => b[1].bookInfo.length - a[1].bookInfo.length)
      .forEach(genre => {
        console.log(`${genre[0]} ${genre[1].genre}: ${genre[1].bookInfo.length}`);
        genre[1].bookInfo
          .sort((a, b) => a[0].localeCompare(b[0]))
          .forEach(book => console.log(`--> ${book[0]}: ${book[1]}`))
      });
  }

  data
    .forEach(line => {
      if (line.includes(' -> ')) {
        addShelf(line);
      } else if (line.includes(': ')) {
        addBook(line);
      }
    })

  output();

}

parseBooksInformation(
  [
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
  ]
);

parseBooksInformation(
  [
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
  ]
);