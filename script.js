const canvas = document.querySelector(".canvas");
const cvs = canvas.getContext("2d");


canvas.addEventListener('mousemove', e => {
    if (e.buttons == 1){
        cvs.beginPath();
        cvs.moveTo(e.offsetX, e.offsetY);
        cvs.lineTo(e.offsetX, e.offsetY);
        cvs.stroke();
        console.log(e   );
    }
});



