//  Attachment for Title Script for Attracting Users -->
let originalTitle = document.title;
let intervalId;
let messages = [
  "👋 Come back to Anvi Space!",
  "✨ Exploring the stars...",
  "🤖 Autonomous Robotics awaits!",
  "🌌 Your mission isn’t over!",
];

window.addEventListener("blur", () => {
  let i = 0;
  intervalId = setInterval(() => {
    document.title = messages[i % messages.length];
    i++;
  }, 1200);
});

window.addEventListener("focus", () => {
  clearInterval(intervalId);
  document.title = originalTitle;
});
