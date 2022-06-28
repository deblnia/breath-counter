const container = document.getElementById("container");
const text = document.getElementById("text");

const [i, h, o] = [4000, 7000, 8000]
const total = i + h + o

const start = Date.now()
setInterval(() => {
  let elapsed = (Date.now() - start) % total
  if (elapsed < i) {
    text.innerText = 'Breathe In'
    container.className = 'container grow'
  } else if (elapsed > i + h) {
    text.innerText = 'Breathe Out'
    container.className = 'container shrink'
  } else if ((elapsed < i + h) & (elapsed > i)) {
    text.innerText = "Hold"
  }
}, 10)

let rotations = 0;

function increment_rotations() {
  rotations += 1;
  document.getElementById("outer text").textContent = String(rotations);
}

setInterval(increment_rotations, total);
