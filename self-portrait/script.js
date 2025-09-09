// 1. obtener referencia del canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

//the rest of the hair
ctx.beginPath();
ctx.strokeStyle = " #000000";
ctx.fillStyle = "#000000";
ctx.rect(canvas.width / 2 - 160, canvas.height / 2 - 20, 320, 150);
ctx.stroke();
ctx.fill();

//face base 

ctx.beginPath();
ctx.strokeStyle = " #fff2e6";
ctx.fillStyle = "#fff2e6";
ctx.lineWidth = 3;
ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();


//ears
ctx.beginPath();
ctx.strokeStyle = " #fff2e6";
ctx.fillStyle = "#fff2e6";
ctx.arc(canvas.width / 2 - 150, canvas.height / 2, 40, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 + 150, canvas.height / 2, 40, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

//left eye
ctx.beginPath();
ctx.strokeStyle = " #000000";
ctx.fillStyle = "#000000";
ctx.arc(canvas.width / 2 - 75, canvas.height / 2, 10, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

//right eye
ctx.beginPath();
ctx.strokeStyle = " #000000";
ctx.fillStyle = "#000000";
ctx.arc(canvas.width / 2 + 75, canvas.height / 2, 10, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

//mouth
ctx.beginPath();
ctx.strokeStyle = " #ff9999";
ctx.fillStyle = "#ff9999";
ctx.arc(canvas.width / 2, canvas.height / 2 + 50, 50, 0, Math.PI);
ctx.stroke();
ctx.fill();


//hair
ctx.beginPath();
ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.fillStyle = "black";
ctx.arc(canvas.width / 2, canvas.height / 2 - 20, 160, Math.PI, 0);
ctx.stroke();
ctx.fill();

//hair strands
ctx.beginPath();
ctx.arc(canvas.width / 2 - 185, canvas.height / 2 + 10, 50, 200, Math.PI * 2.5);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width / 2 + 160, canvas.height / 2 + 10, 50, 45, Math.PI * 1.5);
ctx.stroke();
ctx.fill();






