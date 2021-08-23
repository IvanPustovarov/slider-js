let touchstartX = 0;
let touchendX = 0;

const slider = document.querySelector(".slide");

const handleGesture = () => {
  if (touchstartX < touchendX) alert("swiped left!");
  if (touchstartX > touchendX) alert("swiped right!");
};

slider.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
