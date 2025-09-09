// 1. obtener referencia del canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = 150;
var height = 35;

//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

//draw background
ctx.fillStyle = "rgb(0, 0, 0)"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

//draw middle circle 

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.arc(canvas.width / 2, canvas.height / 2, width, 0, Math.PI * 2);
ctx.stroke();




