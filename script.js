const bar = document.getElementById("bar");
const startButton = document.getElementById("start-button");
const cancelButton = document.getElementById("cancel-button");
const loopsInput = document.getElementById("loops-input");
const delayInput = document.getElementById("delay-input");

let timer = undefined;

startButton.addEventListener("click", () => {
  showButton(cancelButton);
  startLoop();
});

cancelButton.addEventListener("click", () => {
  cancelTimer();
  showButton(startButton);
  updateBar(0);
});

function startLoop() {
  const loops = loopsInput.value;
  const delay = delayInput.value;
  let per = 100 / loops;
  (function loop(i) {
    timer = setTimeout(() => {
      updateBar(i);
      if (i < 100 + per) loop(i + per);
      else showButton(startButton);
    }, delay);
  })(0);
}

function showButton(button) {
  startButton.style.display = "none";
  cancelButton.style.display = "none";
  button.style.display = "block";
}

function updateBar(i) {
  bar.style.background = `linear-gradient(90deg, #ff7f50 ${i}%, #ffffff 0)`;
  bar.textContent = Math.min(100, Math.round(i)) + "%";
}

function cancelTimer() {
  clearTimeout(timer);
  timer = undefined;
}
