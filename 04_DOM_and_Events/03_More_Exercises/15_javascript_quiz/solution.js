function solve() {
  const sections = Array.from(document.querySelectorAll('section'));
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const result = document.querySelector('#results > li > h1');
  let rightAnswersCount = 0;

  for (let idx = 0; idx < sections.length; idx++) {
    let [btnOne, btnTwo] = sections[idx].querySelectorAll('p');

    btnOne.addEventListener('click', checkAnswer);
    btnTwo.addEventListener('click', checkAnswer);

    function checkAnswer(e) {
      let answer = e.currentTarget.textContent;
      sections[idx].style.display = 'none'
  
      if (answer === rightAnswers[idx]) {
        rightAnswersCount++;
      }
  
      if (idx < sections.length - 1) {
        sections[idx + 1].style.display = 'block'
      } else {
        document.querySelector('#results').style.display = 'block';
        if (rightAnswersCount === rightAnswers.length) {
          result.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          result.textContent = `You have ${rightAnswersCount} right answers`;
        }
      }
    }
  }
}
