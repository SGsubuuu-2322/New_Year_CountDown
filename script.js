const countDown = document.getElementById("countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
  const currentTime = new Date();

  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  daysEl.innerText = d < 10 ? "0" + d : d;
  hoursEl.innerText = h < 10 ? "0" + h : h;
  minutesEl.innerText = m < 10 ? "0" + m : m;
  secondsEl.innerText = s < 10 ? "0" + s : s;
}

setInterval(updateCountDown, 1000);
