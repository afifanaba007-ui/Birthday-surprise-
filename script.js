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
  document.querySelector(".opening").style.display = "none";
  document.getElementById("main").style.display = "block";
}

setInterval(() => {
  current = (current + 1) % photos.length;
  document.getElementById("slide").src = photos[current];
}, 3000);
