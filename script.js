const canvas = document.querySelector(".canvas");
const cvs = canvas.getContext("2d");
const colors = document.querySelectorAll(".li");
const clear = document.querySelector(".clear");

vcolors = {
    "red": "#d63031",
    "blue": "#0984e3",
    "white": "#ffffff",
    "yellow": "#f9ca24",
    "black": "#2d3436",
    "green": "#2ecc71"
}

canvas.width = 1200;
canvas.height = 600;

canvas.addEventListener('mousemove', e => {
    let x = e.offsetX;
    let y = e.offsetY;
    if (e.buttons === 1){
        cvs.lineTo(x, y);
        cvs.stroke();
    }
    else {
        cvs.beginPath();
        cvs.moveTo(x, y);
    }
});

function chageColor(e){
    const color = e.target.textContent;
    cvs.strokeStyle = vcolors[color];
}

Array.from(colors).forEach(color => color.addEventListener("click", chageColor));
// ctx.lineWidth += 1.5; 두께

clear.addEventListener('click', () => cvs.clearRect(0, 0, canvas.width, canvas.height));

cvs.strokeStyle = vcolors["black"];
