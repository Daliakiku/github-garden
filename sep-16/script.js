console.log(gsap);

// Select the square element
const box = document.querySelector('.box');

// Create a function to get a random integer between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive, the minimum is inclusive
}

// Add a click event listener to the window
window.addEventListener('click', (event) => {
    console.log("mouse clicked");

    // Get mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get window size
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    // Get the box's dimensions
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    // Calculate the maximum x and y positions to keep the box fully visible
    const maxX = winWidth - boxWidth;
    const maxY = winHeight - boxHeight;

    let randomX, randomY;

    // Generate random positions that are not equal to the mouse's current position
    do {
        randomX = getRandomInt(0, maxX);
        randomY = getRandomInt(0, maxY);
    } while (Math.abs(randomX - mouseX) < boxWidth && Math.abs(randomY - mouseY) < boxHeight);

    console.log(`Mouse: (${mouseX}, ${mouseY})`);
    console.log(`Random: (${randomX}, ${randomY})`);

    // Animate the box to the random position using GSAP
    gsap.to(box, { duration: 1, top: randomY, left: randomX });
});
 
