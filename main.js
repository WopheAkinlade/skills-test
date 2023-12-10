// get necessary elements
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const indicators = document.querySelector(".indicators");
const dots = Array.from(indicators.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Set position for each slide, credit for code below: @KevinPowell on YouTube
// quickfix
// A restructuring may be needed as I believe there's got to be a better way

// Culprit: The carousel track had a width of 100% meaning the full width of it's parent. The parent had a static width so it took that up. Hence, the translation works as expected but because it's width cannot contain all it's children, and you have overflow set to hidden, it will encompass the rest. That's why they were hidden

// Merely removing `overflow: hidden` in the css for carousel-track fixed it kind of but the issue of the carousel-track going out of bounds still persisted

// what I'm doing here is making it so that I know the width of carousel-track's children beforehand and setting it (carousel-track) to the total of that. That way, there's no chance of overflow
let totalWidth = 0;
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
  totalWidth += slideWidth;
});
track.style.width = `${totalWidth}px`;
// Credit for code above: @Kevin Powell on Youtube

// Credit for code below: @Kevin Powell on Youtube
const moveToSlide = (track, currentSlide, targetSlide) => {
  // using template strings is much cleaner
  // will only work as expected if this container can take up full width of all children combined
  // check line 10 for quickfix
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

indicators.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentIndicator = indicators.querySelector(".current-indicator");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  console.log(currentSlide);

  moveToSlide(track, currentSlide, targetSlide);
});
