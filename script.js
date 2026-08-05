const photos = [
  "images/1000048755.jpg",
  "images/1000053593.webp",
  "images/1743531221047.webp",
  "images/IMG-20250726-WA0014.jpg",
  "images/IMG-20260805-WA0008.jpg",
  "images/IMG-20260805-WA0009.jpg",
  "images/IMG-20260805-WA0010.jpg",
  "images/IMG-20260805-WA0017.jpg",
  "images/IMG-20260805-WA0020.jpg",
  "images/IMG-20260805-WA0021.jpg"
];

let current = 0;

function openGift() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
}

function nextPhoto() {
  current = (current + 1) % photos.length;
  document.getElementById("photo").src = photos[current];
}

// Auto slideshow every 3 seconds
setInterval(() => {
  const main = document.getElementById("main");
  if (main.style.display === "block") {
    nextPhoto();
  }
}, 3000);

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "-30px";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";
  heart.style.transition = "transform 6s linear, opacity 6s linear";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(" + (window.innerHeight + 100) + "px)";
    heart.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);
