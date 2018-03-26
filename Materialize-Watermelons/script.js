$(document).ready(function(){
  $('.modal').modal(); 
  setTimeout(function() {$('#modal1').modal('open');}, 5000)
  $('.carousel').carousel({
      padding: 200    
  });
  autoplay()   
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }
});

