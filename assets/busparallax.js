// script.js
const bus = document.getElementById("bus");
const backgroundContainer = document.querySelector(".background-container");
let isDragging = false;
let prevX = 0;

bus.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - prevX;
    prevX = e.clientX;

    const newLeft = bus.offsetLeft + deltaX;
    bus.style.left = newLeft + "px";

    const backgroundOffset = -newLeft / 2; // Adjust the speed of parallax
    backgroundContainer.style.backgroundPosition = backgroundOffset + "px 0";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});
