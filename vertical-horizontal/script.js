// 1. obtener referencia del canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(0, canvas.height);


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function drawLine (x, y){
    ctx.beginPath(); 
    ctx.strokeStyle = getRandomColor();
    ctx.moveTo(x, y - 50);
    ctx.lineTo(x, y + 50);
    ctx.lineTo(x, y);
    ctx.lineWidth = 10;
    ctx.stroke(); 
}

drawLine(200, 200);

//listen for mouse movement to draw circles
window.addEventListener("mousemove", function(eventData){ //eventData is an object we create to contains information about the event. It could be called anything
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.11)";
    ctx.fill();
    //the function is only accessible within the event listener, and doesn't need a name (but you can put a name if you want)
    drawLine(eventData.x, eventData.y);
});