function oddOccurrences(sentence) {
  
  let oddOccurrencesWords = {};

  let words = sentence.split(' ');
  words
    .forEach((word) => {
      let count = words.filter((w) => w.toLowerCase() === word.toLowerCase()).length
      if (count % 2 === 1) {
        oddOccurrencesWords[word.toLowerCase()] = count;
      }
    })

  console.log(Object.keys(oddOccurrencesWords).join(' '))
}

oddOccurrences(
  'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);

oddOccurrences(
  'Cake IS SWEET is Soft CAKE sweet Food'
)