
const photos = [
"images/Imagesimages/images/images/images/images/1000048755.jpg",
"images/Imagesimages/images/images/images/images/1000053593.webp",
"images/Imagesimages/images/images/images/images/1743531221047.webp",
"images/Imagesimages/images/images/images/images/IMG-20250726-WA0014.jpg",
"images/Imagesimages/images/images/images/images/IMG-20260322-WA0001.jpg",
"images/Imagesimages/images/images/images/images/IMG-20260805-WA0008.jpg",
"images/Imagesimages/images/images/images/images/IMG-20260805-WA0009.jpg",
"images/Imagesimages/images/images/images/images/IMG-20260805-WA0010.jpg",
"images/Imagesimages/images/images/images/images/IMG-20260805-WA0020.jpg",
"images/Imagesimages/images/images/images/images/IMG-20260805-WA0021.jpg"
];

let current = 0;

document.getElementById("photo").src = photos[current];

function nextPhoto(){
current++;
if(current>=photos.length){
current=0;
}
document.getElementById("photo").src = photos[current];
}
