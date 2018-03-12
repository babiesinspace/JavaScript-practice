let newH1 = document.getElementsByTagName('H1')[0]

document.addEventListener("keypress", function (event) {
  newH1.innerText = event.key
})