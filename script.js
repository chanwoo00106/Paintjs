const canvas = document.querySelector(".canvas");
const cvs = canvas.getContext("2d");
const nowColor = document.querySelector(".nowColor > span");
const colors = document.querySelectorAll(".li");
const eraser = document.querySelector(".fa-eraser");
const trash = document.querySelector(".fa-trash-alt");
const paint = document.querySelector(".fa-fill-drip");
const inputSize = document.querySelector(".inputSize");
const save = document.querySelector(".fa-save");
const size = document.querySelector(".size");
//const clear = document.querySelector(".clear");

let color = "";

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

// 색 바꾸기
function chageColor(e){
    color = e.target.style.backgroundColor;
    cvs.strokeStyle = color;
    nowColor.style.backgroundColor = color;
}
Array.from(colors).forEach(color => color.addEventListener("click", chageColor));

//한 색으로 채우기
paint.addEventListener("click", () => {
    cvs.fillStyle  = color;
    cvs.fillRect(0,0,canvas.width,canvas.height);
});

// 모든 그림 지우기
trash.addEventListener('click', () => cvs.clearRect(0, 0, canvas.width, canvas.height));

//지우개
eraser.addEventListener("click", () => {
    cvs.strokeStyle = "#f1f2f6";
    nowColor.style.backgroundColor = "#f1f2f6";
});

// 저장
save.addEventListener("click", () => {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
});

// 펜 크기
inputSize.addEventListener("input", () => {
    cvs.lineWidth = inputSize.value;
    size.innerText = inputSize.value;
});

// 시작 세팅
function init(){
    cvs.lineWidth = inputSize.value;
    cvs.strokeStyle = "#2d3436";
    size.innerText = 3;
}

init();