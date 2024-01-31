const countDown = document.getElementById("countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const currentFullYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentFullYear + 1} 00:00:00`);
console.log(newYearTime);
