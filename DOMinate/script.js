//Change h1 to whatever key is pressed

// let newH1 = document.getElementsByTagName('H1')[0]

// document.addEventListener("keypress", function (event) {
//   newH1.innerText = event.key
// })

let button = document.getElementById("submit-button")

// let password = document.getElementById("password")

// let username = document.getElementById("username")

// button.addEventListener("click", function() {
//   if (password.value != "12345678") {
//     alert("incorrect")
//   } 
// })

let purpleButton = document.getElementById("purple-button")

let body = document.querySelector("body")

let isPurple = false


// purpleButton.addEventListener("click", function(){
//   if (isPurple) {
//     body.style.background = "white";
//   } else {
//     body.style.background = "purple"
//   }
//   isPurple = !isPurple
// })

purpleButton.addEventListener("click", function(){
  body.classList.toggle("purple");
})