import * as THREE from 'three';
console.log(THREE);

// Select all stars
const stars = document.querySelectorAll('.star');

// Add a mousemove event listener to the window
window.addEventListener('mousemove', (event) => {
    // Get the mouse position relative to the center of the screen
    const mouseX = event.clientX - window.innerWidth / 2;
    const mouseY = event.clientY - window.innerHeight / 2;

    // Loop through each star and apply a parallax effect
    stars.forEach((star, index) => {
        const speed = (index + 1) * 0.3; // Adjust speed based on the star's index
        const xOffset = (mouseX * speed) / 100; // Horizontal movement
        const yOffset = (mouseY * speed) / 100; // Vertical movement

        // Apply the transformation
        star.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});