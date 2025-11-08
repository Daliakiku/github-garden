// // Select the circle element
// const mouseCircle = document.getElementById('mouse-circle');

// // Add an event listener for mouse movement
// document.addEventListener('mousemove', (event) => {
//     // Update the circle's position based on the mouse coordinates
//     mouseCircle.style.left = `${event.clientX}px`;
//     mouseCircle.style.top = `${event.clientY}px`;
// });


// Select the circle element
const mouseCircle = document.getElementById('mouse-circle');

// Variables to store the mouse position and the circle's current position
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
const lagFactor = 0.3; // Adjust this value to control the lag (smaller = more lag)

// Add an event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    // Update the target mouse position
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animation loop to smoothly move the circle
function animate() {
    // Interpolate the circle's position toward the mouse position
    circleX += (mouseX - circleX) * lagFactor;
    circleY += (mouseY - circleY) * lagFactor;

    // Update the circle's position
    mouseCircle.style.left = `${circleX}px`;
    mouseCircle.style.top = `${circleY}px`;

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();