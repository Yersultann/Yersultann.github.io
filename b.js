// CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// FORM POPUP

var modal = document.getElementById('myForm');
var modalDiv = document.getElementById('form-div');
var btn = document.getElementById('order-btn');
var btn1 = document.getElementById('order-btn1');
var btn2 = document.getElementById('order-btn2');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}
btn1.onclick = function() {
  modal.style.display = 'block';
}
btn2.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function() {
  if (event.target == modalDiv) {
    modal.style.display = 'none';
  }
}
