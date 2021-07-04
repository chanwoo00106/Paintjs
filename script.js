const canvas = document.querySelector(".canvas");
const cvs = canvas.getContext("2d");
const nowColor = document.querySelector(".nowColor > span");
const colors = document.querySelectorAll(".li");
const eraser = document.querySelector(".fa-eraser");
const trash = document.querySelector(".fa-trash-alt");
const paint = document.querySelector(".fa-fill-drip");
const inputSize = document.querySelector(".inputSize");
//const clear = document.querySelector(".clear");

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
    const color = e.target.style.backgroundColor;
    cvs.strokeStyle = color;
    nowColor.style.backgroundColor = color;
}

Array.from(colors).forEach(color => color.addEventListener("click", chageColor));

trash.addEventListener('click', () => cvs.clearRect(0, 0, canvas.width, canvas.height));
eraser.addEventListener("click", () => {
    cvs.strokeStyle = "#f1f2f6";
    nowColor.style.backgroundColor = "#f1f2f6";
});

inputSize.addEventListener("input", () => {
    cvs.lineWidth = inputSize.value;
});

function init(){
    cvs.lineWidth = inputSize.value;
    cvs.strokeStyle = "#2d3436";
}

init();