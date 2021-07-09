const canvas = document.querySelector(".canvas"),
    cvs = canvas.getContext("2d"),
    nowColor = document.querySelector(".nowColor > span"),
    colors = document.querySelectorAll(".li"),
    eraser = document.querySelector(".fa-eraser"),
    trash = document.querySelector(".fa-trash-alt"),
    paint = document.querySelector(".fa-fill-drip"),
    inputSize = document.querySelector(".inputSize"),
    save = document.querySelector(".fa-save"),
    size = document.querySelector(".size"),
    width = document.querySelector(".wid"),
    height = document.querySelector(".hei"),
    pen = document.querySelector(".fa-pen");


let color = "";

let filling = false;

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
    filling = !filling;
    pen.style.display = "inline";
    paint.style.display = "none";
});
pen.addEventListener("click", () => {
    filling = !filling;
    pen.style.display = "none";
    paint.style.display = "inline";
});

canvas.addEventListener("mousedown", () => {
    if (filling) {
        cvs.fillStyle  = color;
        cvs.fillRect(0,0,canvas.width,canvas.height);
    }
});

// 모든 그림 지우기
trash.addEventListener('click', () => cvs.clearRect(0, 0, canvas.width, canvas.height));

//지우개
eraser.addEventListener("click", () => {
    cvs.strokeStyle = "#f1f2f6";
    nowColor.style.backgroundColor = "#f1f2f6";
    color = "#f1f2f6";
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

//화면 크기
width.addEventListener("input", () => {
    canvas.style.width = width.value;
    canvas.width = width.value;
});
height.addEventListener("input", () => {
    canvas.style.height = height.value;
    canvas.height = height.value;
});

// 시작 세팅
function init(){
    cvs.lineWidth = inputSize.value;
    cvs.strokeStyle = "#2d3436";
    size.innerText = 3;
    

    canvas.style.width = 1200;
    canvas.style.height = 700;

    canvas.width = 1200;
    canvas.height = 700;
}



init();