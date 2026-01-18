console.log("main.js is loaded")

let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach(s => s.classList.remove("activeSlide"));
  dots.forEach(d => d.classList.remove("active"));

  slides[slideIndex - 1].classList.add("activeSlide");
  dots[slideIndex - 1]?.classList.add("active");
}
