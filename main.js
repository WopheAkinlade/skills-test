// get necessary elements
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const indicators = document.querySelector(".indicators");
const dots = Array.from(indicators.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Set position for each slide, credit for code below: @KevinPowell on YouTube
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});
// Credit for code above: @Kevin Powell on Youtube

// Credit for code below: @Kevin Powell on Youtube
const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = "translateX(-" + targetSlide.style.left + ")"
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}


indicators.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentIndicator = indicators.querySelector(".current-indicator");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex]

  console.log(currentSlide)

  moveToSlide(track, currentSlide, targetSlide)
});
