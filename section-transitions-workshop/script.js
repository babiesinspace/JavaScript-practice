let scrollPos = window.scrollY;

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');


function reveal(section) {
  for (i = 0; i < section.children.length; i++) {
    section.children[i].classList.add("show"); 
  }
};

function fadeOut(section) {
  for (i = 0; i < section.children.length; i++) {
    section.children[i].classList.remove("show"); 
  }
};

window.addEventListener('scroll', function(){ 
    scrollPos = window.scrollY;
    if (scrollPos < 750) {
      reveal(section1);
      fadeOut(section2);
    }    
    if (scrollPos > 750 && scrollPos < 1250) {
      fadeOut(section1)
      reveal(section2);
      fadeOut(section3);
    }
    if (scrollPos > 1550 && scrollPos < 2050) {
      reveal(section3);
      fadeOut(section4);
    }
    if (scrollPos > 2350) {
      reveal(section4);
      fadeOut(section3);
    } 
});