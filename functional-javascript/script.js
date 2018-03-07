function calc(operator, num1, num2) {
  switch (operator) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "divide":
      return num1 / num2;
    case "multiply":
      return num1 * num2;
  }
}

function ask(question, answer){
  let userGuess = prompt(question);
  return userGuess === answer ? 1 : 0;
}


var questions = [
  "Was Kim born in 1985?",
  "Will Rob get out of jail?",
  "Does North seem happy?",
  "Kanye released 'Heartless' in 2008?"
  ]
  
var answers = [
  "yes",
  "no",
  "no",
  "yes"
  ]

let userScore = 0

questions.forEach(function(q) {
  let correctAnswer = answers[questions.indexOf(q)]
  userScore += ask(q, correctAnswer)
})

console.log(`your score is ${userScore}`)
