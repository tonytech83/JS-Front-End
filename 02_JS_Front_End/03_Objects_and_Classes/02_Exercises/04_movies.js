function moviesParser(data) {
  let movies = [];

  data
    .forEach((line) => {
      line = line.split(' ');

      if (line.includes('addMovie')) {
        let movieName = line.slice(1).join(' ');

        addMovie(movieName);

      } else if (line.includes('directedBy')) {
        let indexOfCommand = line.indexOf('directedBy');
        let movieName = line.slice(0, indexOfCommand).join(' ');
        let directorName = line.slice(indexOfCommand + 1).join(' ');

        addDirector(movieName, directorName);

      } else {
        let indexOfDate = line.indexOf('onDate');
        let movieName = line.slice(0, indexOfDate).join(' ');
        let date = line.slice(indexOfDate + 1).join(' ');

        addDate(movieName, date);
        
      }
    })

  function addMovie(name) {
    movies.push({ name })
  }

  function addDirector(movieName, directorName) {
    let movie = movies.find((m) => m.name === movieName)
    if (movie) {
      movie.director = directorName;
    }
  }

  function addDate(movieName, date) {
    let movie = movies.find((m) => m.name === movieName)
    if (movie) {
      movie.date = date;
    }
  }

  movies
    .forEach((movie) => {
      if (movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
        console.log(JSON.stringify(movie))
      }
    })
}

moviesParser(
  [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ]
)

moviesParser(
  [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
  ]
)