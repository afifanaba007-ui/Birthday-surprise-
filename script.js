const photos = [
"images/1000048755.jpg",
"images/1000053593.webp",
"images/1743531221047.webp",
"images/IMG-20250726-WA0014.jpg",
"images/IMG-20260322-WA0001.jpg",
"images/IMG-20260805-WA0008.jpg",
"images/IMG-20260805-WA0009.jpg",
"images/IMG-20260805-WA0010.jpg",
"images/IMG-20260805-WA0020.jpg",
"images/IMG-20260805-WA0021.jpg"
];

let current = 0;

document.getElementById("photo").src = photos[current];

function nextPhoto() {
  current = (current + 1) % photos.length;
  document.getElementById("photo").src = photos[current];
}
