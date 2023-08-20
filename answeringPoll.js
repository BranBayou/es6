const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: c++'],
  answers: new Array(4).fill(0),
  registerNeewAnswer() {
    // Get answer
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')} \n (Write option number)`)
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    console.log(this.answers);
  },
  displayResults(type = 'array') {
    if(type === 'array') {
      console.log(this.answers);
    } else if(type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};
// poll.registerNeewAnswer();

document.querySelector('.answer-poll').addEventListener('click', poll.registerNeewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string');