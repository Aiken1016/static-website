// Feature 1: Live Digital Clock
function updateClock() {
  const now = new Date();
  let timeString = now.toLocaleTimeString();
  document.getElementById("live-clock").innerText = "Current Time: " + timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Feature 2: Countdown Timer (Target: Dec 31, 2026)
const targetDate = new Date("December 24, 2026 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerText = 
      `${days} Days | ${hours} Hours | ${minutes} Mins | ${seconds} Secs`;
  } else {
    document.getElementById("countdown-timer").innerText = "Till Christmas";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Feature 3: Interactive Button
const btn = document.getElementById("msg-btn");
const msg = document.getElementById("btn-message");

btn.addEventListener("click", function() {
  msg.innerText = "Oh Hello";
  msg.style.color = "#27ae60";
  msg.style.fontWeight = "bold";
});