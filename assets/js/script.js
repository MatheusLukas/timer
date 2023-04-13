//Meu jeito de Fazer o timer
const clock = document.querySelector("#clock");
const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");
const buttonRestart = document.querySelector("#restart");
const containerParagraph = document.querySelector(".container");
const paragraph = containerParagraph.querySelector("p");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

function timer() {
  paragraph.style.color = "black";
  if (interval) return;
  interval = setInterval(function () {
    if (seconds < 60) {
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (hours === 24) {
      alert("O timer chegou no limite");
      stop();
      restart();
    }

    clock.innerHTML = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
  paragraph.style.color = "red";
}
function restart() {
  if (!interval) {
    clock.innerHTML = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    paragraph.style.color = "black";
  }
}

// setInterval(function () {
//   console.log(timer());
// }, 1000);

buttonStart.addEventListener("click", (e) => timer());
buttonStop.addEventListener("click", (e) => stop());
buttonRestart.addEventListener("click", (e) => restart());
