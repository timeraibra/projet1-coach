const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let  currentSlide = 0;

function showSlide() {
  slides.forEach(slide => slide.style.display = "none");
  slides[currentSlide].style.display = "flex";
}

nextBtn.addEventListener("click", function() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
});

prevBtn.addEventListener("click", function() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length -1;
  }
  showSlide();
});

showSlide();