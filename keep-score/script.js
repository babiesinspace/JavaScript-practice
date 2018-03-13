let p1button = document.getElementById('player1')

let p2button = document.getElementById('player2')

let p1score = document.querySelector('#p1score')

let p2score = document.querySelector('#p2score')

let setFirstTo = document.getElementById('firstTo')

let playingTo = document.getElementById('playingTo')

function foundWinner(){
  p1button.disabled = true;
  p2button.disabled = true;
}

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

p1button.addEventListener("click", function() {
  let newScore = scoreUp(p1score.innerText)
  p1score.innerText = newScore;
  if (p1score.innerText == playingTo.innerText) {
    p1score.style.color = 'green'
    foundWinner()
  }
})

p2button.addEventListener("click", function() {
  let newScore = scoreUp(p2score.innerText)
  p2score.innerText = newScore;
  if (p2score.innerText == playingTo.innerText) {
    p2score.style.color = 'green'
    foundWinner()
  }
})

setFirstTo.addEventListener("change", function(){
  playingTo.innerText = setFirstTo.value
})
