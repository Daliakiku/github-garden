// 1. obtener referencia del canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


i = 0;

while (i < 100 ){
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(i * Math.PI / 50);

    ctx.beginPath();
    ctx.rect(-i * 20, -i * 20, i * 40, i * 40);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.restore();
    i = i + 1;
}



