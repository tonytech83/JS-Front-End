function commentsParser(data) {
  let users = new Set();
  let articles = {};


  function addUser(line) {
    let [_, username] = line.split(' ');
    users.add(username);
  }

  function addArticle(line) {
    let [_, articleName] = line.split(' ');
    if (!articles.hasOwnProperty(articleName)) {
      articles[articleName] = [];
    }
  }

  function addPost(line) {
    let [info, commentData] = line.split(': ');
    let [username, articleName] = info.split(' posts on ');
    let [commentTitle, commentContent] = commentData.split(', ');
    if (users.has(username) && articles.hasOwnProperty(articleName)) {
      articles[articleName].push([username, commentTitle, commentContent])
    }
  }

  function output() {
    Object.entries(articles)
      .sort((a, b) => b[1].length - a[1].length)
      .forEach(article => {
        console.log(`Comments on ${article[0]}`)
        // console.log(article[1])
        article[1]
          .sort((a, b) => a[0].localeCompare(b[0]))
          .forEach(comment => console.log(`--- From user ${comment[0]}: ${comment[1]} - ${comment[2]}`))
      })
  }

  data
    .forEach(line => {
      if (line.includes('user')) {
        addUser(line);
      } else if (line.includes('article')) {
        addArticle(line);
      } else if (line.includes('posts on')) {
        addPost(line)
      }
    })

  output();
}

commentsParser(
  [
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
  ]
);

commentsParser(
  [
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
  ]
)