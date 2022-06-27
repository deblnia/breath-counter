const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 9500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

rotations = 0;
function increment_rotations() {
  rotations += 1;
  document.getElementById("outer text").textContent = String(rotations);
}

setInterval(increment_rotations, breatheTime);
