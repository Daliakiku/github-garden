// Access the star element
const star = document.getElementById('star');

// Initialize the rotation angle
let angle = 0;

// Function to rotate the star
function rotateStar() {
    angle += 1; // Increment the angle
    star.style.transform = `rotate(${angle}deg)`; // Apply the rotation
    star.style.transformOrigin = 'center'; // Set the rotation origin to the center
}

// Use setInterval to rotate the star continuously
setInterval(rotateStar, 16); // Rotate every 16ms (~60fps)

// Access all the <svg> elements inside the #line-cont container
const lines = document.querySelectorAll('#line-cont svg');

// Function to toggle visibility of the lines
function toggleLines() {
    lines.forEach((line) => {
        // Check the current display property and toggle it
        if (line.style.display === 'none') {
            line.style.display = 'block'; // Show the line
        } else {
            line.style.display = 'none'; // Hide the line
        }
    });
}

// Use setInterval to call the toggleLines function every second
setInterval(toggleLines, 800); // 1000ms = 1 second