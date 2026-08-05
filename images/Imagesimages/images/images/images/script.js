function openGift() {
    document.querySelector(".opening").style.display = "none";
    document.getElementById("main").style.display = "block";
}

const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    if (slide) {
        current = (current + 1) % images.length;
        slide.src = images[current];
    }
}, 3000);

const canvas = document.getElementById("confetti");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];

    for (let i = 0; i < 120; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 120
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
            ctx.fill();

            c.y += 2;
            if (c.y > canvas.height) {
                c.y = 0;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}
