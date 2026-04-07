// Slider logic (only runs on homepage where .slider-container exists)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
  function showSlidesAuto() {
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlidesAuto, 4000);
  }
  showSlidesAuto();

  window.changeSlide = function(n) {
    slideIndex += n;
    if (slideIndex < 1) slideIndex = slides.length;
    if (slideIndex > slides.length) slideIndex = 1;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    slides[slideIndex - 1].style.display = 'block';
  };
  // initial display
  for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
  slideIndex = 0;
  showSlidesAuto();
}

// Live clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const clockEl = document.getElementById('liveClock');
  if (clockEl) clockEl.innerText = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// Highlight active menu item based on current page URL
document.querySelectorAll('.menu-bar a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-menu');
  }
});
