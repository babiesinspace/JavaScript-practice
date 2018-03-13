let p1button = document.getElementById('player1')

let p2button = document.getElementById('player2')

let p1score = document.querySelector('#p1score')

let p2score = document.querySelector('#p2score')

function toNumber(score){
  return Number(score);
}

function addPoint(scoreAsNumber) {
  return scoreAsNumber += 1;
}

function scoreUp(score){
  let num = toNumber(score)
  return addPoint(num)
}

p1button.addEventListener("click", function () {
  let newScore = scoreUp(p1score.innerText)
  p1score.innerText = newScore;
})

p2button.addEventListener("click", function () {
  let newScore = scoreUp(p2score.innerText)
  p2score.innerText = newScore;
})