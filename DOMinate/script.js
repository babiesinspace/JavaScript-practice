//Change h1 to whatever key is pressed

// let newH1 = document.getElementsByTagName('H1')[0]

// document.addEventListener("keypress", function (event) {
//   newH1.innerText = event.key
// })

let button = document.getElementById("submit-button")

let password = document.getElementById("password")

let username = document.getElementById("username")

button.addEventListener("click", function() {
  if (password.value != "12345678") {
    alert("incorrect")
  } 
})