// script.js
function initComparisons() {
  const x = document.querySelector(".img-comp-overlay");
  let clicked = 0, w = x.offsetWidth, h = x.offsetHeight;
  const slider = document.createElement("div");
  slider.setAttribute("class", "img-comp-slider");
  x.parentElement.insertBefore(slider, x);
  slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

  slider.addEventListener("mousedown", () => clicked = 1);
  window.addEventListener("mouseup", () => clicked = 0);
  window.addEventListener("mousemove", (e) => {
    if (!clicked) return false;
    let pos = e.pageX - x.getBoundingClientRect().left;
    pos = Math.max(0, Math.min(pos, w));
    slide(pos);
  });

  function slide(xPos) {
    x.style.width = xPos + "px";
    slider.style.left = xPos - (slider.offsetWidth / 2) + "px";
  }
}
window.onload = initComparisons;
