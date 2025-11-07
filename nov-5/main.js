// // Select the #t1 and #img-cont elements
// const t1 = document.getElementById('t1');
// const img1 = document.getElementById('img1');

// // Add event listeners for hover
// t1.addEventListener('mouseenter', () => {
//     img1.style.opacity = '1';
//     img1.style.visibility = 'visible';
//     img1.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
// });

// t1.addEventListener('mouseleave', () => {
//     img1.style.opacity = '0';
//     img1.style.visibility = 'hidden';
// });

// Loop through t1 to t6 and img1 to img6
for (let i = 1; i <= 6; i++) {
    const t = document.getElementById(`t${i}`); // Select t1, t2, ..., t6
    const img = document.getElementById(`img${i}`); // Select img1, img2, ..., img6
    const line = document.getElementById(`line${i}`); // Select img1, img2, ..., img6


    // Add event listeners for hover
    t.addEventListener('mouseenter', () => {
        img.style.opacity = '1';
        line.style.opacity = '1';
        line.style.visibility = 'visible';
        img.style.visibility = 'visible';
        img.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    });

    t.addEventListener('mouseleave', () => {
        line.style.opacity = '0';
        img.style.opacity = '0';
        img.style.visibility = 'hidden';
        line.style.visibility = 'hidden';

    });
}

