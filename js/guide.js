let slideIndex = 1;
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);

// Next/previous controls
function plusSlides(n, num) {
  showSlides(slideIndex += n, num);
}

// Thumbnail image controls
function currentSlide(n, num) {
  showSlides(slideIndex = n, num);
}

function showSlides(n, num) {
  let i;
  let string = "mySlides"
  let input = string.concat(num);
  let slides = document.getElementsByClassName(input);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}