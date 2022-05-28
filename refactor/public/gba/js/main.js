'use strict';
const resizeCanvas = () => {
  setTimeout(() => {
    let canvas = document.querySelector("canvas");
    if (!canvas) return;
    const wh = window.innerHeight;
    const ww = window.innerWidth;
    const nw = 480;
    const nh = 320;
    const waspct = ww / wh;
    const naspct = nw / nh;

    if (waspct > naspct) {
      var val = wh / nh;
    } else {
      var val = ww / nw;
    }
    let ctrldiv = document.querySelector(".ctrl_div");
    canvas.style.height = 320 * val - ctrldiv.offsetHeight - 18 + "px";
    canvas.style.width = 480 * val - 24 + "px";
  }, 1000);
};
window.addEventListener(
  "resize",
  (e) => {
    resizeCanvas();
  },
  true
);