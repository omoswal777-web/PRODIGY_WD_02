let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById("display").innerText =
    `${String(hrs).padStart(2, "0")}:` +
    `${String(mins).padStart(2, "0")}:` +
    `${String(secs).padStart(2, "0")}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  running = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  let lapTime = document.getElementById("display").innerText;
  let li = document.createElement("li");
  li.innerText = lapTime;
  document.getElementById("laps").appendChild(li);
}