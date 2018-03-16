//This comes from data.js
var gifs = window.data.data;

function randomGif() {
  return gifs[Math.floor(Math.random() * gifs.length)]
}

let giffy = document.getElementById("giffy")

let button = document.getElementById("button")
let img = document.createElement("iframe")

giffy.appendChild(img)

button.addEventListener("click", function(){
  img.src = randomGif().embed_url;  
})
