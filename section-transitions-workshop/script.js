let scrollPos = window.scrollY;

let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');


function reveal(section) {
  for (i = 0; i < section.children.length; i++) {
    section.children[i].classList.add("show"); 
  }
};

window.addEventListener('scroll', function(){ 
    scrollPos = window.scrollY;
    if (scrollPos > 750) {
      console.log(section2)
      reveal(section2)
    }
    if (scrollPos > 1550) {
      reveal(section3)
    }
    if (scrollPos > 2350) {
      reveal(section4)
    }
});